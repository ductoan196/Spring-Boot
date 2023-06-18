package com.example.task_management_practice.repository;

import com.example.task_management_practice.entity.Task;
import com.example.task_management_practice.model.response.TaskResponse;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TaskRepository {
    static int AUTO_ID =1;

    final List<Task> tasks = new ArrayList<>();


    public List<Task> getAll() {
        return tasks;
    }
}
