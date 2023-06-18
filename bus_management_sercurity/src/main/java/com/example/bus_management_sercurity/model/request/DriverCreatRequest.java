package com.example.bus_management_sercurity.model.request;

import com.example.bus_management_sercurity.statics.Level;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)

public class DriverCreatRequest {
    @Size(max = 100, message = "Driver name cannot over 100")
    @NotBlank(message = "Driver name cannot be blank")
    String name;

    @Size(max = 100, message = "Driver address cannot over 100")
    @NotBlank(message = "Driver address cannot be blank")
    String address;

    @Pattern(regexp = "\\d{10}", message = "Phone must be 10 character")
    @NotBlank(message = "Driver phone cannot be blank")
    String phone;

    Level level;
}
