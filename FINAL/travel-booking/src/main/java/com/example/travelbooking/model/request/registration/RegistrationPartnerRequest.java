package com.example.travelbooking.model.request.registration;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RegistrationPartnerRequest {
    @NotBlank
    @Size(max = 50)
    @Email(message = "Email không hợp lệ")
    String email;

    @NotBlank
    String password;

    @NotBlank
    String hotelName;
}
