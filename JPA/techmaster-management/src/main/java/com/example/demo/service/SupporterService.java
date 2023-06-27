package com.example.demo.service;

import com.example.demo.model.Course;
import com.example.demo.model.Supporter;
import com.example.demo.repository.CourseRepository;
import com.example.demo.repository.SupporterRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SupporterService {

    private final SupporterRepository supporterRepository;


    public List<Supporter> getAllSupporters() {
        return supporterRepository.findAll();
    }
}
