// // File: main.js
//
// $(document).ready(function() {
//     // Gọi API xác nhận đăng ký
//     function verifyRegistration(email, code) {
//         $.ajax({
//             url: `http://localhost:8080/api/v1/authentication/verify?email=${email}&code=${code}`,
//             type: 'GET',
//             success: function() {
//                 handleVerificationSuccess();
//             },
//             error: function() {
//                 handleVerificationError();
//             }
//         });
//     }
//
//     // Hàm xử lý khi xác nhận thành công
//     function handleVerificationSuccess() {
//         // Hiển thị thông báo thành công bằng Toastr
//         toastr.success("Xác nhận đăng ký thành công!");
//
//         // Chuyển hướng về trang chủ sau 2 giây
//         setTimeout(function() {
//             window.location.href = "http://localhost:8080/home";
//         }, 2000);
//     }
//
//     // Hàm xử lý khi xác nhận thất bại
//     function handleVerificationError() {
//         // Hiển thị thông báo lỗi bằng Toastr
//         toastr.error("Xác nhận đăng ký thất bại!");
//     }
//
//     // Lấy email và code từ URL
//     const urlParams = new URLSearchParams(window.location.search);
//     const email = urlParams.get('email');
//     const code = urlParams.get('code');
//
//     console.log(email);
//     console.log(code)
//
//     // Gọi API xác nhận đăng ký
//     verifyRegistration(email, code);
// });
