package com.example.busmanagementajax.model.response;

import com.example.busmanagementajax.statics.Level;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DriverResponse {
    int id;
    String name;
    String address;
    String phone;
    Level level;
}
