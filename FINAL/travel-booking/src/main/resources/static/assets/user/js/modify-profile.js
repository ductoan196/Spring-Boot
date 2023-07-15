$(document).ready(function() {
    $(".change-avatar-btn").click(() => {
        $("#avatar-input").click();
    });


    $("#avatar-input").change(event => {
        console.log("Bắt sự kiện");
        const tempFiles = event.target.files;

        if (!tempFiles || tempFiles.length === 0) {
            return;
        }
        console.log(event.target.files);
        chosenFile = tempFiles[0];

        const imageBlob = new Blob([chosenFile], {type: chosenFile.type});
        const imageUrl = URL.createObjectURL(imageBlob);
        $("#avatar").attr("src", imageUrl);
    });
});

const btnChangeAvatar = document.getElementById('');