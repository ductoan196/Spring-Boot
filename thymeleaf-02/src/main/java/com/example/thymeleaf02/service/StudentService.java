package com.example.thymeleaf02.service;

import com.example.thymeleaf02.model.Student;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {
    private final List<Student> students = new ArrayList<>();

    private void creatData(){
        for (int i = 0; i < 5; i++) {
            Student student = Student.builder()
                    .id(i)
                    .name("Nguyễn Văn " + i)
                    .phone("Phone "+ i)
                    .dob(LocalDate.now())
                    .gpa(i)
                    .build();
            students.add(student);
        }
    }

    public List<Student> getAllStudent(){
        creatData();
        return students;
    }

    public void saveStudent(Student student) {
        students.add(student);
    }

    public void modifyInfo(Student student) {
    }
}
