package com.example.busmanagementajax.statics;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.experimental.FieldDefaults;

@Getter
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PUBLIC)
public enum Level {
    LEVEL_A("Level A"),
    LEVEL_B("Level B"),
    LEVEL_C("Level C"),
    LEVEL_D("Level D"),
    LEVEL_E("Level E"),
    LEVEL_F("Level F");

    public String name;
}
