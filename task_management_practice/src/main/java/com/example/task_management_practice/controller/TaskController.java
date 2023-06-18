package com.example.task_management_practice.controller;

import com.example.task_management_practice.entity.Task;
import com.example.task_management_practice.model.request.TaskRequest;
import com.example.task_management_practice.model.response.TaskResponse;
import com.example.task_management_practice.repository.TaskRepository;
import com.example.task_management_practice.service.TaskService;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TaskController {

    TaskService taskService;

    TaskRepository taskRepository;

    @GetMapping("/tasks")
    public String getTasks(Model model) {
        List<TaskResponse> tasks = taskService.getAll();
        model.addAttribute("tasks", tasks);
        return "index";
    }

    //Tạo mới
    @PostMapping("/api/v1/tasks")
    public ResponseEntity<?> creatTask(@RequestBody @Valid TaskRequest request) {

    }

    //Lấy ttin chi tiết
    @GetMapping("/api/v1/tasks/{id}")
    public ResponseEntity<?> getDetail(@PathVariable Integer id) {

    }

    //Update
    @PutMapping("/api/v1/tasks")
    public ResponseEntity<?> update(@RequestBody @Valid TaskRequest request) {

    }

    //Delete
    @DeleteMapping("api/v1/tasks/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {

    }
}
