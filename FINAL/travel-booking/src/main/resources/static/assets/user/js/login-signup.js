const emailEle = document.getElementById('login-email');
const passwordEle = document.getElementById('login-password');

const signupEmailEle = document.getElementById('signup-email');
const signupPasswordEle = document.getElementById('signup-password');
const reSignupPasswordEle = document.getElementById('signup-confirm-password');


const btnLogin = document.getElementById('login-btn');
const btnSignup = document.getElementById('signup-btn');
const inputEles = document.querySelectorAll('.input-row');

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
            success: function(response) {
                console.log('ok');
                console.log(response);
                toastr.success('Đăng Nhập Thành Công!');
                localStorage.setItem("jwt", response.jwt);
                localStorage.setItem("refreshToken", response.refreshToken);
                let userInfor = {
                    id: response.id,
                    username: response.username,
                    roles: response.roles
                };
                localStorage.setItem("userInfo", JSON.stringify(userInfor));
                $('#signInSignUp').modal('hide');
            },
            error: function(xhr, status, error) {
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
                toastr.success('Đăng Kí Thành Công!');
                console.log(response)
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
            }
        })
    }

});


function checkValidate() {

    let emailValue = emailEle.value;
    let passwordValue = passwordEle.value;

    let isCheck = true;

    if (emailValue == '') {
        setError(emailEle, 'Email không được để trống');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, 'Email không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }

    if (passwordValue == '') {
        setError(passwordEle, 'Password không được để trống');
        isCheck = false;
    } else if (!isPassword(passwordValue)) {
        setError(passwordEle, 'Vui lòng nhập password từ 6 đến 15 ký tự, bao gồm cả chữ và số');
        isCheck = false;
    } else {
        setSuccess(passwordEle);
    }

    return isCheck;
}


function checkSignUpValidate() {

    let signupEmailValue = signupEmailEle.value;
    let signupPasswordValue = signupPasswordEle.value;
    let reSignupPasswordValue = reSignupPasswordEle.value;
    let isCheck = true;



    if (signupEmailValue == '') {
        setError(signupEmailEle, 'Email không được để trống');
        isCheck = false;
    } else if (!isEmail(signupEmailValue)) {
        setError(signupEmailEle, 'Email không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(signupEmailEle);
    }

    if (signupPasswordValue == '') {
        setError(signupPasswordEle, 'Password không được để trống');
        isCheck = false;
    } else if (!isPassword(signupPasswordValue)) {
        setError(signupPasswordEle, 'Vui lòng nhập password từ 6 đến 15 ký tự, bao gồm cả chữ và số');
        isCheck = false;
    } else {
        setSuccess(signupPasswordEle);
    }

    if (reSignupPasswordValue == '') {
        setError(reSignupPasswordEle, 'Re-enter Password không được để trống');
        isCheck = false;
    } else if (reSignupPasswordValue !== signupPasswordValue) {
        setError(reSignupPasswordEle, 'Password và Re-enter password không giống nhau');
        isCheck = false;
    } else {
        setSuccess(reSignupPasswordEle);
    }

    return isCheck;
}

function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

function isPassword(password) {
    return /^(?=.*[a-zA-Z])(?=.*\d).{6,15}$/.test(password);
}
