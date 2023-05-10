package com.example.thymeleaf02.model;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Teacher {
    int id;
    String name;
    String phone;
    String subject;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    LocalDate dob;
}
