package com.example.bus_management_sercurity.statics;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Level {
    A("Level A"),
    B("Level B"),
    C("Level C"),
    D("Level D"),
    E("Level E");

    public String name;
}
