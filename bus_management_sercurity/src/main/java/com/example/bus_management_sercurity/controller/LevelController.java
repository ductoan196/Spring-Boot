package com.example.bus_management_sercurity.controller;

import com.example.bus_management_sercurity.model.response.LevelResponse;
import com.example.bus_management_sercurity.service.LevelService;
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
@FieldDefaults(level = AccessLevel.PRIVATE)
public class LevelController {
    LevelService levelSerVice;

    @GetMapping
    public List<LevelResponse> getAll() {
        return levelSerVice.getAllLevel();
    }
}
