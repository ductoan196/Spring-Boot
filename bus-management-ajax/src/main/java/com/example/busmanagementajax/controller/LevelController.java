package com.example.busmanagementajax.controller;

import com.example.busmanagementajax.entity.Driver;
import com.example.busmanagementajax.model.response.LevelResponse;
import com.example.busmanagementajax.service.LevelService;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/levels")
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class LevelController {
    LevelService levelService;
    @GetMapping
    public List<LevelResponse> getAll() {
        return levelService.getAll();
    }
}
