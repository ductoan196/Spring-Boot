$(document).ready(function () {
    // Áp dụng Select2 cho phần tử <select>
    $("#facilityList").select2({
        multiple: true, // Cho phép chọn nhiều giá trị
        placeholder: "Select BedType", // Văn bản hiển thị khi chưa chọn giá trị nào
        width: "100%", // Chiều rộng của dropdown
        height: "100%",
        allowClear: true // Hiển thị nút xóa khi đã chọn giá trị
    });

    // Xử lý khi nút "Thêm giường" được ấn
    $("#addBedButton").on("click", function () {
        // Sao chép dòng giường đầu tiên và thêm vào dưới cùng
        var newBedRow = $(".bed-row:first").clone();
        $(".container").append(newBedRow);
    });


});

document.addEventListener("DOMContentLoaded", function () {
    // Lưu trữ loại giường đã chọn trong thuộc tính data
    const selectBoxes = document.querySelectorAll(".bed-type");
    selectBoxes.forEach(function (selectBox) {
        selectBox.addEventListener("change", function () {
            selectBox.dataset.selectedBedType = selectBox.value;
        });
    });

    // Lắng nghe sự kiện click trên nút xóa
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn-remove-bed")) {
            // Xóa dòng chứa giường khi người dùng nhấn nút xóa
            event.target.closest(".bed-row").remove();
        }
    });
});

$(document).ready(function () {

    let roomId = [[${roomId}]]

    $("#uploadForm").validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,
        rules: {
            name: {
                required: true,
                maxlength: 100
            },
            price: {
                required: true,
                number: true,
                min: 50000
            },
            capacity: {
                required: true,
                digits: true,
                min: 1
            },
            quantity: {
                required: true,
                digits: true,
                min: 1
            },
            description: {
                required: true,
                maxlength: 500,
                minlength: 20
            },
            bedQuantity: {
                required: true,
                digits: true,
                min: 1
            }
        },
        messages: {
            name: {
                required: "Please enter the room name.",
                maxlength: "The room name must not exceed 100 characters."
            },
            price: {
                required: "Please enter the room price.",
                number: "Please enter a valid number.",
                min: "Room price must be greater than or equal to 50.000."
            },
            capacity: {
                required: "Please enter the room capacity.",
                digits: "Please enter a valid whole number.",
                min: "Room capacity must be at least 1."
            },
            quantity: {
                required: "Please enter the room quantity.",
                digits: "Please enter a valid whole number.",
                min: "Room quantity must be at least 1."
            },
            description: {
                required: "Please enter the room description.",
                maxlength: "The room description must not exceed 500 characters.",
                minlength: "Description must have at least 50 characters"
            },
            bedQuantity: {
                required: "Please enter the number of beds.",
                digits: "Please enter a valid whole number.",
                min: "Number of beds must be at least 1."
            }
        },
        errorClass: "custom-error-message"
    });


    document.getElementById("create-room-btn").addEventListener("click", function () {

        if ($("#uploadForm").valid()) {
            // Tạo formData mới
            const formData = new FormData();

            let userInfo = JSON.parse(localStorage.getItem("userInfo"))


            // Thu thập thông tin từ các trường form và thêm vào formData
            formData.append("name", document.getElementById("roomName").value);
            formData.append("description", document.getElementById("roomDescription").value);
            formData.append("price", document.getElementById("roomPrice").value);
            formData.append("capacity", document.getElementById("roomCapacity").value);
            formData.append("room_nums", document.getElementById("roomQuantity").value);
            formData.append("roomStatus", document.getElementById("roomStatusList").value);
            formData.append("hotelEmail", userInfo.email);

            // Xử lý phần file ảnh từ trường "roomImages"
            const roomImagesInput = document.getElementById("roomImages");
            const images = roomImagesInput.files;
            for (let i = 0; i < images.length; i++) {
                formData.append("images", images[i]);
            }

            // Lấy danh sách các facility đã chọn từ Select2 và chuyển thành mảng []
            const selectedFacilities = $("#facilityList").val();
            formData.append("facilities", selectedFacilities);

            // Thu thập thông tin về giường từ các dòng giường
            const bedRows = document.querySelectorAll(".bed-row");
            const beds = [];

            bedRows.forEach(function (bedRow) {
                const bedType = bedRow.querySelector(".bed-type").value;
                const bedQuantity = bedRow.querySelector(".bed-quantity").value;

                // Tạo đối tượng CreateBedRequest từ giá trị của trường beds
                const bedRequest = {bedType: bedType, quantity: bedQuantity};

                beds.push(bedRequest);
            });

            // Thêm mảng beds vào formData
            beds.forEach(function (bed, index) {
                formData.append(`beds[${index}].bedType`, bed.bedType);
                formData.append(`beds[${index}].quantity`, bed.quantity);
            });

            $.ajax({
                url: '/api/v1/partner/rooms',
                type: 'POST',
                processData: false,
                contentType: false,
                data: formData,
                success: function (response) {
                    // Xử lý kết quả trả về từ API (nếu cần)
                    console.log('ok');
                    toastr.success('Đã tạo phòng thành công.');
                    console.log(response);
                },
                error: function (xhr, status, error) {
                    // Xử lý lỗi (nếu có)
                    console.error(error);
                    toastr.error('Đã xảy ra lỗi khi tạo phòng.');
                }
            });
            // Console log dữ liệu formData dưới dạng JSON
            const formDataJSON = formDataToJSON(formData);
            console.log(JSON.stringify(formDataJSON));
        }
    });

    document.getElementById("update-room-btn").addEventListener("click", function () {

        if ($("#uploadForm").valid()) {
            // Tạo formData mới
            const formData = new FormData();

            let userInfo = JSON.parse(localStorage.getItem("userInfo"))


            // Thu thập thông tin từ các trường form và thêm vào formData
            formData.append("name", document.getElementById("roomName").value);
            formData.append("description", document.getElementById("roomDescription").value);
            formData.append("price", document.getElementById("roomPrice").value);
            formData.append("capacity", document.getElementById("roomCapacity").value);
            formData.append("room_nums", document.getElementById("roomQuantity").value);
            formData.append("roomStatus", document.getElementById("roomStatusList").value);
            formData.append("hotelEmail", userInfo.email);

            // Xử lý phần file ảnh từ trường "roomImages"
            const roomImagesInput = document.getElementById("roomImages");
            const images = roomImagesInput.files;
            for (let i = 0; i < images.length; i++) {
                formData.append("images", images[i]);
            }

            // Lấy danh sách các facility đã chọn từ Select2 và chuyển thành mảng []
            const selectedFacilities = $("#facilityList").val();
            formData.append("facilities", selectedFacilities);

            // Thu thập thông tin về giường từ các dòng giường
            const bedRows = document.querySelectorAll(".bed-row");
            const beds = [];

            bedRows.forEach(function (bedRow) {
                const bedType = bedRow.querySelector(".bed-type").value;
                const bedQuantity = bedRow.querySelector(".bed-quantity").value;

                // Tạo đối tượng CreateBedRequest từ giá trị của trường beds
                const bedRequest = {bedType: bedType, quantity: bedQuantity};

                beds.push(bedRequest);
            });

            // Thêm mảng beds vào formData
            beds.forEach(function (bed, index) {
                formData.append(`beds[${index}].bedType`, bed.bedType);
                formData.append(`beds[${index}].quantity`, bed.quantity);
            });

            $.ajax({
                url: '/api/v1/partner/rooms' + roomId,
                type: 'POST',
                processData: false,
                contentType: false,
                data: formData,
                success: function (response) {
                    // Xử lý kết quả trả về từ API (nếu cần)
                    console.log('ok');
                    toastr.success('Đã tạo phòng thành công.');
                    console.log(response);
                },
                error: function (xhr, status, error) {
                    // Xử lý lỗi (nếu có)
                    console.error(error);
                    toastr.error('Đã xảy ra lỗi khi tạo phòng.');
                }
            });
            // Console log dữ liệu formData dưới dạng JSON
            const formDataJSON = formDataToJSON(formData);
            console.log(JSON.stringify(formDataJSON));
        }
    });
});

function formDataToJSON(formData) {
    const obj = {};
    formData.forEach((value, key) => {
        if (!obj.hasOwnProperty(key)) {
            obj[key] = value;
        } else {
            if (!Array.isArray(obj[key])) {
                obj[key] = [obj[key]];
            }
            obj[key].push(value);
        }
    });
    return obj;
}
