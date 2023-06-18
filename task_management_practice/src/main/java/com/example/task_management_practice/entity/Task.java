package com.example.task_management_practice.entity;

import com.example.task_management_practice.statics.Status;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Task {
    int id;

    String name;

    String description;

    Status status;

    LocalDate createdDateTime;

    LocalDate expectedEndTime;

    Boolean overdue;
}
