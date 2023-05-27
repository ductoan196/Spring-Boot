package com.example.hellojpa.service;

import com.example.hellojpa.repository.EmployeeRepository;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE)
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;
}
