package com.example.busmanagement.model;

import com.example.busmanagement.statics.Level;
import lombok.*;
import lombok.experimental.FieldDefaults;

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
    String soLuotChay;
}
