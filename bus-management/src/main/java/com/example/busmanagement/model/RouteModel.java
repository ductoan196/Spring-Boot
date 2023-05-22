package com.example.busmanagement.model;

import com.example.busmanagement.statics.Level;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RouteModel {
    int id;

    @NotBlank(message = "Route distance cannot be blank")
    @Size(max = 100, message = "Book author cannot be over 100 characters")
    float distance;

    @NotBlank(message = "Book author cannot be blank")
    @Size(max = 100, message = "Book author cannot be over 100 characters")
    int stopNumber;
}
