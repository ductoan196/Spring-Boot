package com.example.demo.model.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateSupporterRequest {
    @NotBlank(message = "Tên supporter không được để trống")
    private String name;

    @NotBlank(message = "SĐT không được để trống")
    private String phone;

    @NotBlank(message = "Avatar không được để trống")
    private String avatar;
}
