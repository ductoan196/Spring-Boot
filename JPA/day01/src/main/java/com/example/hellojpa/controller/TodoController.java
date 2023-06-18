package com.example.hellojpa.controller;

import com.example.hellojpa.entity.Todo;
import com.example.hellojpa.repository.TodoRepository;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping("/")
    public String getIndex(Model model) {
        model.addAttribute("todos", todoRepository.findAll());
        return "index";
    }

    /**
     * APIs
     */

    @GetMapping("/api/todos")
    public ResponseEntity<?> creatTodo(@RequestBody Todo todo) {
        Todo newTodo = new Todo(null, todo.getTitle(), false);
        todoRepository.save(newTodo);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/api/todos/{id}")
    public ResponseEntity<?> updateTodo(@PathVariable Integer id, @RequestBody Todo todo) {
        //Kiểm tra id
        Todo updatedTodo = todoRepository.findById(id)
                .orElseThrow(() -> {
                    throw new RuntimeException("Not found");
                });

        //Cập nhật
        updatedTodo.setTitle(todo.getTitle());
        updatedTodo.setStatus(todo.getStatus());
        return null;
    }

    @PostMapping("/api/todos/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable Integer id) {
        //Kiểm tra id
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> {
                    throw new RuntimeException("Not found");
                });
        todoRepository.delete(todo);

        return ResponseEntity.noContent().build(); //204
    }
}
