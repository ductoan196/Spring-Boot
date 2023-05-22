package com.example.busmanagement.model;

import com.example.busmanagement.statics.Level;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DriverModel {
    int id;
    @NotBlank(message = "Book author cannot be blank")
    @Size(max = 100, message = "Book author cannot be over 100 characters")
    String name;

    @NotBlank(message = "Book author cannot be blank")
    @Size(max = 100, message = "Book author cannot be over 100 characters")
    String address;

    @NotBlank(message = "User phone cannot be blank")
    @Pattern(regexp = "\\d{10}", message = "Phone must be 10 number characters")
    String phone;

    Level level;
}
