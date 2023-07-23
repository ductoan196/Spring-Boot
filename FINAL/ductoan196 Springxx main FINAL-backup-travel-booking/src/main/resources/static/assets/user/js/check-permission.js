window.onload = function() {
    const jwtToken = localStorage.getItem("jwt");
    const userInfo = localStorage.getItem("userInfo");

    // Kiểm tra nếu chưa đăng nhập
    if (!jwtToken || !userInfo) {
        const pathName = window.location.pathname;
        const isLoginRequiredPage = pathName.startsWith('/admin/') || pathName.startsWith('/partner/');

        if (isLoginRequiredPage) {
            toastr.success('Vui lòng đăng nhập tài khoản');
            window.location.href = "http://localhost:8080/home";
        }
    } else {
        // Đã đăng nhập, kiểm tra quyền truy cập
        const userInfor = JSON.parse(userInfo);
        const roles = userInfor.roles || [];

        // Kiểm tra quyền truy cập tùy theo đường dẫn
        const pathName = window.location.pathname;

        if (pathName.startsWith('/admin/') && !roles.includes("ADMIN")) {
            // Không có quyền truy cập vào trang admin, chuyển hướng đến trang thông báo lỗi
            window.location.href = "http://localhost:8080/access-denied";
        } else if (pathName.startsWith('/partner/') && !roles.includes("PARTNER")) {
            // Không có quyền truy cập vào trang partner, chuyển hướng đến trang thông báo lỗi
            window.location.href = "http://localhost:8080/access-denied";
        } else {
            // Có quyền truy cập, tiếp tục xử lý khác
            // ...
        }
    }
};

