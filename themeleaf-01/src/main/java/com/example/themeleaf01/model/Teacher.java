package com.example.themeleaf01.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Teacher {
    int id;
    String name;
    String phone;
    LocalDate dob;
    String specialization;
}
