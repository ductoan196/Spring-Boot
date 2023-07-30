function showLoading() {
    // Hiển thị overlay để làm mờ nền xung quanh
    $(".overlay").show();

    // Hiển thị màn hình loading khi gọi API
    $("#loading").show();

    // Ngăn chặn việc click thêm nút submit trong khi API đang được gọi
    $("#create-room-btn").prop("disabled", true);
}

function hideLoading() {
    // Ẩn màn hình loading sau khi API hoàn tất (thành công hoặc thất bại)
    $("#loading").hide();

    // Ẩn overlay
    $(".overlay").hide();

    // Cho phép click nút submit lại sau khi API hoàn tất
    $("#submitButton").prop("disabled", false);
}