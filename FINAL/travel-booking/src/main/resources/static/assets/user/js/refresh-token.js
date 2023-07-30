function refreshToken() {
    const jwt = localStorage.getItem('jwt');
    let formData ={
        refreshToken: localStorage.getItem('refreshToken')
    }
    if (jwt) {
        $.ajax({
            url: '/api/v1/authentication/refresh-token',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            headers: {
                'Authorization': 'Bearer' + " " + jwt
            },
            success: function (response) {
                localStorage.setItem("jwt", response.jwt)
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        })
    }
}

//Set 30p thif refresh token lai mot lan
setInterval(refreshToken, 60*1000*30)