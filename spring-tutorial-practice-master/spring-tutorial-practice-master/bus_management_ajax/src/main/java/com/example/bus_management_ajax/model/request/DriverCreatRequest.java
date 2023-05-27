package com.example.bus_management_ajax.model.request;

import com.example.bus_management_ajax.statics.Level;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DriverCreatRequest {
    int id;
    @NotBlank(message = "Driver name cannot be blank")
    @Size(max = 100, message = "Driver name cannot be over 100 characters")
    String name;

    @NotBlank(message = "Driver author cannot be blank")
    @Size(max = 100, message = "Driver address cannot be over 100 characters")
    String address;

    @NotEmpty(message = "Driver phone cannot be blank")
    @Pattern(regexp = "\\d{10}", message = "Phone must be 10 number characters")
    String phone;

    Level level;
}
