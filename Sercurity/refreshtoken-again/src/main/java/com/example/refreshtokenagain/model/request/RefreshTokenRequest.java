package com.example.refreshtokenagain.model.request;

import javax.validation.constraints.NotBlank;

public class RefreshTokenRequest {
    @NotBlank
    String refreshToken;
}
