package com.example.busmanagementajax.model.request;

import com.example.busmanagementajax.statics.Level;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DriverCreatRequest {
    @Size(max = 100, message = "Name cannot over 100 characters")
    @NotBlank(message = "Driver name cannot be blank")
    String name;

    @Size(max = 255, message = "Address cannot over 255 characters")
    @NotBlank(message = "Driver address cannot be blank")
    String address;

    @NotBlank(message = "Driver phone cannot be blank")
    @Pattern(regexp = "\\d{10}", message = "Phone must be 10 number characters")
    String phone;

    @NotNull(message = "Region cannot be null")
    Level level;
}