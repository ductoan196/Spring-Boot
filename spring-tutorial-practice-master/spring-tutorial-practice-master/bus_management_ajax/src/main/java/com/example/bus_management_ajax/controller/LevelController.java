package com.example.bus_management_ajax.controller;

import com.example.bus_management_ajax.model.response.LevelResponse;
import com.example.bus_management_ajax.service.LevelService;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/levels")
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)

public class LevelController {
    LevelService levelService;

    public List<LevelResponse> getAll() {
        return levelService.getAll();
    }
}
