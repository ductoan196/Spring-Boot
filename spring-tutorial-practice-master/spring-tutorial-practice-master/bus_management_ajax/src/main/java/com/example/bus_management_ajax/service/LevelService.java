package com.example.bus_management_ajax.service;

import com.example.bus_management_ajax.model.response.LevelResponse;
import com.example.bus_management_ajax.statics.Level;
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
        dtos.add(new LevelResponse(Level.LEVEL_D.toString(), Level.LEVEL_D.name));
        dtos.add(new LevelResponse(Level.LEVEL_E.toString(), Level.LEVEL_E.name));
        dtos.add(new LevelResponse(Level.LEVEL_F.toString(), Level.LEVEL_F.name));

        return dtos;
    }
}
