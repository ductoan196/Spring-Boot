package com.example.thymeleaf02.Enum;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public enum Level {
    PROFESSOR,
    DOCTOR,
    MASTER;

    private String level;
}
