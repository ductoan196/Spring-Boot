// window.onload = function () {
//     const jwtToken = localStorage.getItem("jwt");
//
//     // Kiểm tra nếu chưa đăng nhập
//     if (!jwtToken || !userInfo) {
//         const pathName = window.location.pathname;
//         const isLoginRequiredPage = pathName.includes('/admin/') || pathName.includes('/partner/')|| pathName.includes('/user/');
//
//         if (isLoginRequiredPage) {
//             toastr.success('Vui lòng đăng nhập tài khoản');
//             window.location.href = "http://localhost:8080";
//         }
//     } else {
//         // Đã đăng nhập, kiểm tra quyền truy cập
//         const roles = userInfo.roles || [];
//         const pathName = window.location.pathname;
//
//         const requiredRoles = {
//             '/admin/': 'ADMIN',
//             '/partner/': 'PARTNER',
//             // Thêm các trang khác yêu cầu quyền truy cập và vai trò tương ứng ở đây
//             '/user/': 'USER',
//             '/api/v1/users': 'PARTNER'
//         };
//
//         // Kiểm tra quyền truy cập dựa trên đường dẫn
//         let requiredRole = null;
//         for (const path in requiredRoles) {
//             if (pathName.includes(path)) {
//                 requiredRole = requiredRoles[path];
//                 break;
//             }
//         }
//
//         if (requiredRole && !roles.includes(requiredRole)) {
//             // Không có quyền truy cập vào trang yêu cầu, chuyển hướng đến trang thông báo lỗi
//             window.location.href = "http://localhost:8080/access-denied";
//         } else {
//             // Có quyền truy cập, tiếp tục xử lý khác
//             // Thực hiện các hành động cụ thể cho từng trang yêu cầu quyền truy cập
//             // Ví dụ: Tải dữ liệu, hiển thị giao diện, vv.
//             // ...
//         }
//     }
// };