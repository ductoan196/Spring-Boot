package com.example.bus_management_ajax.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AssignmentModel {
    int id;
    int idLaiXe;

    String tenLaiXe;
    int idTuyen;
    float khoangCachTuyen;

    @NotBlank(message = "Book author cannot be blank")
    @Size(max = 100, message = "Book author cannot be over 100 characters")
    String soLuotChay;
}
