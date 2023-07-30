const emailEle = document.getElementById('login-email');
const passwordEle = document.getElementById('login-password');

const signupEmailEle = document.getElementById('signup-email');
const signupPasswordEle = document.getElementById('signup-password');
const reSignupPasswordEle = document.getElementById('signup-confirm-password');

const signupPartnerNameEle = document.getElementById('signup-partner-name');
const signupPartnerEmailEle = document.getElementById('signup-partner-email');
const signupPartnerPasswordEle = document.getElementById('signup-partner-password');
const signupPartnerRePasswordEle = document.getElementById('signup-partner-confirm-password');


// const resetEmailEle = document.getElementById('reset-email');
// const newPasswordEle = document.getElementById('new-password');
// const confirmNewPasswordEle = document.getElementById('confirm-new-password');


const btnLogin = document.getElementById('login-btn');
const btnSignup = document.getElementById('signup-btn');
const btnPartnerSignup = document.getElementById('signup-partner-btn');
const btnSignout = document.getElementById('signout-btn');
// const btnResetPass = document.getElementById('reset-password-btn');
// const btnResetNewPass = document.getElementById('set-new-password-btn');
const inputEles = document.querySelectorAll('.input-row');

$(document).ready(function () {
    const userInformationStr = localStorage.getItem("userInfo");
    if (userInformationStr) {
        const userInformation = JSON.parse(userInformationStr);
        if (userInformation.username) {
            showAvatar()
        }
    }
});

btnLogin.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();

    if (isValid) {
// Tiếp tục xử lý đăng nhập nếu email và password hợp lệ
        let formdata = {
            email: emailEle.value,
            password: passwordEle.value
        };

// Gửi yêu cầu AJAX
        $.ajax({
            url: '/api/v1/authentication/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formdata),
            success: function (response) {
                console.log('ok');
                console.log(response);
                localStorage.clear();
                localStorage.setItem("jwt", response.jwt);
                localStorage.setItem("refreshToken", response.refreshToken);

                let userInfor = {
                    id: response.id,
                    username: response.username,
                    roles: response.roles
                };
                localStorage.setItem("userInfo", JSON.stringify(userInfor));
                toastr.success('Đăng Nhập Thành Công!');

                setTimeout(function() {
                    if (response.roles.includes("USER")) {
                        window.location.href = `http://localhost:8080/home`;
                    } else if (response.roles.includes("PARTNER")) {
                        window.location.href = `http://localhost:8080/partner/dashboard-partner`;
                    } else if (response.roles.includes("ADMIN")) {
                        window.location.href = `http://localhost:8080/admin/dashboard-admin`;
                    }
                }, 2000);

                $('#signInSignUp').modal('hide');
                cleanInput()
            },
            error: function (xhr, status, error) {
                console.error(error);
                toastr.error('Thông Tin Tài Khoản Hoặc Mật Khẩu Không Chính Xác!');
            }
        });
    }
});

btnSignup.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkSignUpValidate();
    if (isValid) {
        showLoading();

        let email = $('#signup-email').val()
        let password = $('#signup-password').val()
        let formdata = {
            email: email,
            password: password
        }
        $.ajax({
            url: '/api/v1/authentication/signup',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formdata),
            success: function (response) {
                console.log('ok')
                toastr.success('Đăng Kí Thành Công! Vui lòng truy cập email của bạn và xác thực tài khoản');
                console.log(response)
                cleanInput()
                $('#signInSignUp').modal('hide');
            },
            error: function (xhr, status, error) {
                if (xhr.status === 400 && xhr.responseText === 'Email is existed') {
                    // toastr.error('Email đã tồn tại');
                    setError(signupEmailEle, 'Email đã tồn tại, vui lòng sử dụng email khác');
                } else {
                    toastr.error('Đăng Kí Thất Bại');
                    console.error(error);
                }
            },
            complete: function () {
                hideLoading();
            }
        })
    }

});

btnPartnerSignup.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkPartnerSignUpValidate();
    if (isValid) {
        showLoading();

        let email = $('#signup-partner-email').val()
        let password = $('#signup-partner-password').val()
        let hotelName = $('#signup-partner-name').val()
        let formdata = {
            email: email,
            password: password,
            hotelName: hotelName
        }
        $.ajax({
            url: '/api/v1/authentication/signup-partner',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formdata),
            success: function (response) {
                console.log('ok')
                toastr.success('Đăng Kí Thành Công! Vui lòng truy cập email của bạn và xác thực tài khoản');
                console.log(response)
                cleanInput()
                $('#signUpPartner').modal('hide');
            },
            error: function (xhr, status, error) {
                if (xhr.status === 400 && xhr.responseText === 'Email is existed') {
                    // toastr.error('Email đã tồn tại');
                    setError(signupEmailEle, 'Email đã tồn tại, vui lòng sử dụng email khác');
                } else {
                    toastr.error('Đăng Kí Thất Bại');
                    console.error(error);
                }
            },
            complete: function () {
                hideLoading();
            }
        })
    }

});

function logout() {
    const jwt = localStorage.getItem('jwt');
    $.ajax({
        url: '/api/v1/authentication/logout',
        type: 'POST',
        headers: {
            Authorization: `Bearer ${jwt}`
        },
        success: function (response) {
            console.log('ok')
            toastr.success('Đã đăng xuất');
            // Ẩn avatar
            hideAvatar();
            // Xóa dữ liệu trong Local Storage
            localStorage.removeItem('jwt');
            localStorage.removeItem('userInfo');
            localStorage.removeItem('refreshToken');
            window.location.href = `http://localhost:8080/home`;
        },
        error: function (error) {
            console.log('Đăng xuất thất bại', error);
        }
    });
}

// Gán sự kiện click cho nút "Log out"
btnSignout.addEventListener('click', function () {
    logout();
});

function refreshToken() {
    const jwt = localStorage.getItem('jwt');
    let formData ={
        refreshToken: localStorage.getItem('refreshToken')
    }
    if (jwt) {
        $.ajax({
            url: '/api/v1/authentication/refresh-token',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            headers: {
                'Authorization': 'Bearer' + " " + jwt
            },
            success: function (response) {
                localStorage.setItem("jwt", response.jwt)
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        })
    }
}

//Set 60s thif refresh token lai mot lan
setInterval(refreshToken, 60*1000)

function cleanInput() {
    $('#signup-email').val('');
    $('#signup-password').val('');
    $('#signup-confirm-password').val('')
    $('#login-email').val('')
    $('#login-password').val('')
}

function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function checkValidate() {
    let isCheck = validateForm(emailEle, passwordEle);
    return isCheck;
}

function checkSignUpValidate() {
    let isCheck = validateForm(signupEmailEle, signupPasswordEle) &&
        signupPasswordEle.value === reSignupPasswordEle.value;
    if (!isCheck) {
        setError(reSignupPasswordEle, 'Password và Re-enter password không giống nhau');
    } else {
        setSuccess(reSignupPasswordEle);
    }
    return isCheck;
}

function checkPartnerSignUpValidate() {
    let isCheck = validateForm(signupPartnerEmailEle, signupPartnerPasswordEle) &&
        signupPartnerPasswordEle.value === signupPartnerRePasswordEle.value;
    if (signupPartnerNameEle.value === '') {
        setError(signupPartnerNameEle, 'Name không được để trống');
    }
    if (!isCheck) {
        setError(signupPartnerRePasswordEle, 'Password và Re-enter password không giống nhau');
    } else {
        setSuccess(signupPartnerRePasswordEle);
    }
    return isCheck;
}

// function validateResetEmail() {
//     const email = resetEmailEle.value;
//
//     if (email === '') {
//         setError(resetEmailEle, 'Email không được để trống');
//         return false;
//     } else if (!validateEmail(email)) {
//         setError(resetEmailEle, 'Email không đúng định dạng');
//         return false;
//     } else {
//         setSuccess(resetEmailEle);
//         return true;
//     }
// }
//
// function validateNewPassword() {
//     const password = newPasswordEle.value;
//     const confirmPassword = confirmNewPasswordEle.value;
//
//     let isValid = true;
//
//     if (password === '') {
//         setError(newPasswordEle, 'Password không được để trống');
//         isValid = false;
//     } else if (!validatePassword(password)) {
//         setError(newPasswordEle, 'Vui lòng nhập password từ 6 đến 15 ký tự, bao gồm cả chữ và số');
//         isValid = false;
//     } else {
//         setSuccess(newPasswordEle);
//     }
//
//     if (confirmPassword === '') {
//         setError(confirmNewPasswordEle, 'Re-enter Password không được để trống');
//         isValid = false;
//     } else if (confirmNewPasswordEle !== password) {
//         setError(confirmPasswordElement, 'Password và Re-enter password không giống nhau');
//         isValid = false;
//     } else {
//         setSuccess(confirmNewPasswordEle);
//     }
//
//     return isValid;
// }


//NEW VALIDATE
function validateEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,15}$/;
    return passwordRegex.test(password);
}

function validateForm(emailElement, passwordElement) {
    const email = emailElement.value;
    const password = passwordElement.value;

    let isValid = true;

    if (email === '') {
        setError(emailElement, 'Email không được để trống');
        isValid = false;
    } else if (!validateEmail(email)) {
        setError(emailElement, 'Email không đúng định dạng');
        isValid = false;
    } else {
        setSuccess(emailElement);
    }

    if (password === '') {
        setError(passwordElement, 'Password không được để trống');
        isValid = false;
    } else if (!validatePassword(password)) {
        setError(passwordElement, 'Vui lòng nhập password từ 6 đến 15 ký tự, bao gồm cả chữ và số');
        isValid = false;
    } else {
        setSuccess(passwordElement);
    }

    return isValid;
}

//PHẦN AUTHENTICATION
// Hàm để kiểm tra xem người dùng đã đăng nhập hay chưa
function isAuthenticated() {
    const jwt = localStorage.getItem('jwt');
    return !!jwt;
}

// Hàm để hiển thị avatar
function showAvatar() {
    const avatarElement = document.querySelector('.avatar');
    avatarElement.style.display = 'block';

    const loginRegisterElement = document.querySelectorAll('.user-partner');
    loginRegisterElement.forEach(element => {
        element.style.display = 'none';
    })
    }

// Hàm để ẩn avatar
function hideAvatar() {
    const avatarElement = document.querySelector('.avatar');
    avatarElement.style.display = 'none';

    const loginRegisterElement = document.querySelectorAll('.user-partner');
    loginRegisterElement.forEach(element => {
        element.style.display = 'block';
    })
}

// // Hàm để thực hiện xác thực người dùng khi tải trang
// function authenticateUserOnLoad() {
//     if (isAuthenticated()) {
//         console.log("Thay đổi avatar");
//         showAvatar();
//
//         const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//         $(".email-info").empty();
//         const userHtmlContent = "<span>" + userInfo.username + "</span>";
//         $(".email-info").append(userHtmlContent);
//
//
//     }
// }
//
// // Xác thực người dùng khi tải trang
// authenticateUserOnLoad();
