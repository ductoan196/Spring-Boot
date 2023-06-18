package com.example.taskmanagement1.controller;

import com.example.taskmanagement1.entity.Task;
import com.example.taskmanagement1.model.request.TaskRequest;
import com.example.taskmanagement1.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.sql.Driver;
import java.util.List;

@Controller
@RequestMapping
@AllArgsConstructor
public class TaskController {
    TaskService taskService;


    @GetMapping("/tasks")
    public String getDriver(Model model) {
        List<Task> tasks = taskService.getAll();
        model.addAttribute("danhSachTask", tasks);
        model.addAttribute("taskMuonTaoMoi", new TaskRequest());

        return ("task-list");
    }

    @PostMapping("api/v1/tasks")
    public ResponseEntity<?> creatTask(@RequestBody @Valid TaskRequest request) {
        taskService.saveTask(request);
        return ResponseEntity.ok(null);
    }

    @GetMapping("api/v1/tasks/{id}")
    public ResponseEntity<?> getDetail(@PathVariable Integer id) {
        return ResponseEntity.ok(taskService.getDetail(id));
    }

    @PutMapping("api/v1/tasks")
    public ResponseEntity<?> update(@RequestBody @Valid TaskRequest request) {
        taskService.saveTask(request);
        return ResponseEntity.ok(null);
    }

    @DeleteMapping("api/v1/tasks/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        taskService.delete(id);
        return ResponseEntity.ok(null);
    }
}
