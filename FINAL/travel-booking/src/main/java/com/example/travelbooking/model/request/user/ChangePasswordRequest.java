package com.example.travelbooking.model.request.user;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ChangePasswordRequest {
    Long userId;

    @NotBlank
    String currentPassword;

    @NotBlank
    String newPassword;

    @NotBlank
    String confirmNewPassword;

}
