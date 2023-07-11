

$(".login-btn").click(function () {
    let email = $('#login-email').val()
    console.log(email)
    let password = $('#login-password').val()
    let formdata = {
        email: email,
        password: password
    }
    $.ajax({
        url: '/api/v1/authentication/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formdata),
        success: function (response) {
            console.log('ok')
            console.log(response)
            toastr.success('Đăng Nhập Thành Công!');

            localStorage.setItem("jwt", response.jwt)
            localStorage.setItem("refreshToken", response.refreshToken)
            let userInfor ={
                id: response.id,
                username: response.username,
            roles: response.roles
            }
            localStorage.setItem("userInfo", JSON.stringify(userInfor))
            $('#signInSignUp').modal('hide');
        },
        error: function (xhr, status, error) {
            console.error(error);
            toastr.error('Thông Tin Tài Khoản Hoặc Mật Khẩu Không Chính Xác!');

        }
    })
})
$(".signup-btn").click(function () {
    let email =$('#name-signup-data').val()
    let password=$('#registerPasswordInput').val()
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
        },
        error: function (xhr, status, error) {
            toastr.error('Đăng Kí Thất Bại');
            console.error(error);
        }
    })

})