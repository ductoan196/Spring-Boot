package com.example.busmanagement.entity;

import com.example.busmanagement.statics.Level;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)

public class Route {
    int id;
    Float distance;
    int stopNumber;
}
