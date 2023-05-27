package com.example.bus_management_ajax.statics;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@FieldDefaults(level = AccessLevel.PUBLIC)
public enum Level {
    LEVEL_A("Level A"),
    LEVEL_B("Level B"),
    LEVEL_C("Level C"),
    LEVEL_D("Level D"),
    LEVEL_E("Level E"),
    LEVEL_F("Level F");

     String name;
}
