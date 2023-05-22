package com.example.studentmanagement02.model;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.*;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class StudentModel {
    int id;
    @Size(max = 100, message = "Name cannot be over 100 characters")
    @NotBlank(message = "Student name cannot be blank")
    String name;


    @NotBlank(message = "Student address cannot be blank")
            @Pattern(regexp = "\\d{10}", message = "Phone must be 10 number characters")
    String phone;

    @Min(value = 0, message = "GPA cannot be less than 0")
    @Max(value = 10, message = "GPA cannot be greater than 10")
    float gpa;


    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @NotNull(message = "Birth date should be less than current date")
    @Past(message = "Birth date should be less than current data")
    LocalDate dob;
}
