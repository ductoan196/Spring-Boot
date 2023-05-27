package com.example.hellojpa;

import com.example.hellojpa.entity.Employee;
import com.example.hellojpa.entity.User;
import com.example.hellojpa.repository.EmployeeRepository;
import com.example.hellojpa.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@SpringBootTest
class HelloJpaApplicationTests {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @Test
    void find_by_department() {
        List<Employee> employees = employeeRepository.findByName("Đức Toàn");
        List<Employee> employees1 = employeeRepository.findByNameUsingNativeQuery("Đức Toàn");
        employees.forEach(System.out::println);
        employees1.forEach(System.out::println);
    }
}
