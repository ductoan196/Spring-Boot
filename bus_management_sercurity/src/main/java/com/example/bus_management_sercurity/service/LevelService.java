package com.example.bus_management_sercurity.service;

import com.example.bus_management_sercurity.model.response.LevelResponse;
import com.example.bus_management_sercurity.statics.Level;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LevelService {
    public List<LevelResponse> getAllLevel() {
        List<LevelResponse> dtos = new ArrayList<>();
        dtos.add(new LevelResponse(Level.A.toString(), Level.A.name));
        dtos.add(new LevelResponse(Level.B.toString(), Level.B.name));
        dtos.add(new LevelResponse(Level.C.toString(), Level.C.name));
        dtos.add(new LevelResponse(Level.D.toString(), Level.D.name));
        dtos.add(new LevelResponse(Level.E.toString(), Level.E.name));
        return dtos;
    }
}
