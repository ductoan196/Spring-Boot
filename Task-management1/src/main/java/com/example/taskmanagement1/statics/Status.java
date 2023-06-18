package com.example.taskmanagement1.statics;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Status {
    TODO("TODO"),
    IN_PROGRESS("IN PROGRESS"),
    REVIEWING("REVIEWING"),
    DONE("DONE");

    String name;
}
