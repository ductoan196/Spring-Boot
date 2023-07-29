
// Function logout
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
