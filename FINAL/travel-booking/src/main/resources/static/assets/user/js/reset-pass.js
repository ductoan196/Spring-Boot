const resetEmailEle = document.getElementById('reset-email');
const newPasswordEle = document.getElementById('new-password');
const confirmNewPasswordEle = document.getElementById('confirm-new-password');

const btnResetPass = document.getElementById('reset-password-btn');
const btnResetNewPass = document.getElementById('set-new-password-btn');

btnResetPass.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = validateResetEmail();
    if (isValid) {
        showLoading();
        let email = $('#reset-email').val()
        let formdata = {
            email: email
        }
        $.ajax({
            url: '/api/v1/authentication/reset-password/request',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formdata),
            success: function (id) {
                console.log('ok')
                toastr.success('Vui lòng truy cập email của bạn và xác thực');
                console.log(id)
                cleanInput()

            },
            error: function (xhr, status, error) {
                setError(resetEmailEle, 'Email chưa đăng ký, vui lòng kiểm tra lại email')
                // toastr.error('Email chưa đăng ký, vui lòng kiểm tra lại email');
                console.error(error);
            },
            complete: function () {
                hideLoading();
            }
        })
    }

});

btnResetNewPass.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = validateNewPassword();
    if (isValid) {
        showLoading();
        let newPassword = $('#new-password').val()

        // const userId = document.getElementById('userId').value;
        // console.log('User ID:', userId);

        let formdata = {
            // userId: userId,
            newPassword: newPassword
        }
        $.ajax({
            url: '/api/v1/authentication/reset-password',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formdata),
            success: function (response) {
                console.log('ok')
                toastr.success('Đã đổi mật khẩu thành công, vui lòng đăng nhập lại');
                console.log(response)
                cleanInput()
            },
            error: function (xhr, status, error) {
                // setError(resetEmailEle, 'Email chưa đăng ký, vui lòng kiểm tra lại email')
                // toastr.error('Email chưa đăng ký, vui lòng kiểm tra lại email');
                console.error(error);
            },
            complete: function () {
                hideLoading();
            }
        })
    }

});



function validateResetEmail() {
    const email = resetEmailEle.value;

    if (email === '') {
        setError(resetEmailEle, 'Email không được để trống');
        return false;
    } else if (!validateEmail(email)) {
        setError(resetEmailEle, 'Email không đúng định dạng');
        return false;
    } else {
        setSuccess(resetEmailEle);
        return true;
    }
}

function validateNewPassword() {
    const password = newPasswordEle.value;
    const confirmPassword = confirmNewPasswordEle.value;

    let isValid = true;

    if (password === '') {
        setError(newPasswordEle, 'Password không được để trống');
        isValid = false;
    } else if (!validatePassword(password)) {
        setError(newPasswordEle, 'Vui lòng nhập password từ 6 đến 15 ký tự, bao gồm cả chữ và số');
        isValid = false;
    } else {
        setSuccess(newPasswordEle);
    }

    if (confirmPassword === '') {
        setError(confirmNewPasswordEle, 'Re-enter Password không được để trống');
        isValid = false;
    } else if (confirmNewPasswordEle !== password) {
        setError(confirmPasswordElement, 'Password và Re-enter password không giống nhau');
        isValid = false;
    } else {
        setSuccess(confirmNewPasswordEle);
    }

    return isValid;
}




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
