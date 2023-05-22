package com.example.studentmanagement02.entity;

import com.example.studentmanagement02.statics.Gender;
import com.example.studentmanagement02.statics.Level;
import com.example.studentmanagement02.statics.Specialize;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)

public class Teacher {
    int id;

    String name;

    String phone;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    LocalDate dob;

    Gender gender;

    Specialize specialize;

    Level level;
}
