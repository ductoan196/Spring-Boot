package com.example.themeleaf01.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class Student {
    int id;
    String name;
    String address;
    LocalDate dob;
    float gpa;

}
