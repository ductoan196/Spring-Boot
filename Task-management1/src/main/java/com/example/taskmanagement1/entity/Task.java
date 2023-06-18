package com.example.taskmanagement1.entity;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Task {
    Integer id;
    String name;
    String description;
    Date createdDateTime;
    Date expectedEndTime;
}
