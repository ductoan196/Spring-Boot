package com.example.busmanagement.model;

import com.example.busmanagement.statics.Level;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DriverModel {
    int id;
    String name;
    String address;
    String phone;
    Level level;
}
