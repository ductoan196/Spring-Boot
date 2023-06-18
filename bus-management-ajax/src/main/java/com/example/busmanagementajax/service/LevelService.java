package com.example.busmanagementajax.service;

import com.example.busmanagementajax.model.response.LevelResponse;
import com.example.busmanagementajax.statics.Level;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LevelService {
    public List<LevelResponse> getAll() {
        List<LevelResponse> dtos = new ArrayList<>();
        dtos.add(new LevelResponse(Level.LEVEL_A.toString(), Level.LEVEL_A.name));
        dtos.add(new LevelResponse(Level.LEVEL_B.toString(), Level.LEVEL_B.name));
        dtos.add(new LevelResponse(Level.LEVEL_C.toString(), Level.LEVEL_C.name));
        return dtos;
    }
}
