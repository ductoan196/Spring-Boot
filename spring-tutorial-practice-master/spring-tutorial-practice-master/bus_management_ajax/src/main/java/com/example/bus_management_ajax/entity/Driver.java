package com.example.bus_management_ajax.entity;

import com.example.bus_management_ajax.statics.Level;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)

public class Driver {
    int id;
    String name;
    String address;
    String phone;
    Level level;
}
