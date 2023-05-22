package com.example.busmanagement.statics;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public enum Level {
    LEVEL_A(1, "Level A"),
    LEVEL_B(2, "Level B"),
    LEVEL_C(3, "Level C"),
    LEVEL_D(4, "Level D"),
    LEVEL_E(5, "Level E"),
    LEVEL_F(6, "Level F");

    private int id;
    private String name;
}
