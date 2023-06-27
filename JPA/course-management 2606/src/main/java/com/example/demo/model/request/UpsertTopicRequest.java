package com.example.demo.model.request;

import lombok.*;

import javax.validation.constraints.NotBlank;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpsertTopicRequest {
    @NotBlank(message = "Tên topic không được để trống")
    private String name;
}
