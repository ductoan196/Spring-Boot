package com.example.thymeleaf02.Enum;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter

public enum Major {
    NATURAL_SCIENCE("Natural Sciences"),
    SOCIAL_SCIENCE("Social Sciences");

    private String major;
}
