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
public class UpdateSupporterRequest {
    @NotBlank(message = "Tên supporter không được để trống")
    private String name;


    @NotBlank(message = "Phone không được để trống")
    private String phone;

    private String avatar;
}
