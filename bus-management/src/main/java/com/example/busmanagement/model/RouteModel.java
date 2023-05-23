package com.example.busmanagement.model;

import com.example.busmanagement.statics.Level;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RouteModel {
    int id;

    @NotNull(message = "Route distance cannot be blank")
    @Min(value = 100, message = "Route distance cannot be lower than 10")
    Float distance;

    @NotNull(message = "Stop number cannot be blank")
    @Digits(integer = Integer.MAX_VALUE, fraction = 0, message = "Stop number must be a valid integer")
    Integer stopNumber;

}
