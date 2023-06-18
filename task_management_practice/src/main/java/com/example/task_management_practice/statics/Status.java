package com.example.task_management_practice.statics;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Status {
    TODO("TODO", "To Do"),
    IN_PROGRESS("IN_PROGRESS", "In Progress"),
    REVIEWING("REVIEWING", "Reviewing"),
    COMPLETE("COMPLETE", "Complete");

    String code;

    String name;
}
