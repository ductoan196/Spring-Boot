package com.example.task_management_practice.model.request;

import com.example.task_management_practice.statics.Status;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDate;

public class TaskRequest {
    int id;

    @NotBlank
    @Size(max = 255)
    String name;

    @Size(max = 255)
    String description;

    @NotBlank
    Status status;


    LocalDate createdDateTime;

    LocalDate expectedEndTime;

    Boolean overdue;
}
