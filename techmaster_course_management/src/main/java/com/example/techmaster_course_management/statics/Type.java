package com.example.techmaster_course_management.statics;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Type {
    OFFLINE("Offline"),
    ONLINE("Online");

    public String name;
}
