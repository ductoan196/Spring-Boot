package com.example.studentmanagement02.model;

import com.example.studentmanagement02.statics.Gender;
import com.example.studentmanagement02.statics.Level;
import com.example.studentmanagement02.statics.Specialize;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.*;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)

public class TeacherModel {

    int id;

    @NotBlank(message = "Teacher name cannot be blank")
    @Size(max = 100, message = "Teacher name cannot be over 100 characters")
    String name;

    @NotBlank(message = "Teacher phone cannot be blank")
    @Pattern(regexp = "\\d{10}", message = "Phone must be 10 characters")
    String phone;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Past(message = "Birth date cannot be less than current date")
    @NotNull(message = "Birth date should not be null")
    LocalDate dob;

    Gender gender;

    Specialize specialize;

    Level level;
}
