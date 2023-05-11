package com.example.thymeleaf02.model;

import com.example.thymeleaf02.Enum.Gender;
import com.example.thymeleaf02.Enum.Level;
import com.example.thymeleaf02.Enum.Major;
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

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    LocalDate dob;
    Gender gender;
    Major major;
    Level level;
}
