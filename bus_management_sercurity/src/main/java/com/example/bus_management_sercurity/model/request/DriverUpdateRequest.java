package com.example.bus_management_sercurity.model.request;

import com.example.bus_management_sercurity.statics.Level;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DriverUpdateRequest {
    int id;

    String name;

    String address;

    String phone;

    Level level;
}
