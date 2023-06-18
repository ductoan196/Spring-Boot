package com.example.task_management_practice.model.response;

import com.example.task_management_practice.statics.Status;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskDetailResponse {

    int id;

    String name;

    String description;

    Status status;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyy-MM-dd HH:mm")
    LocalDate createdDateTime;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyy-MM-dd HH:mm")
    LocalDate expectedEndTime;

    Boolean overdue;
}
