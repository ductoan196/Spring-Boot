package com.example.themeleaf01.service;

import com.example.themeleaf01.model.Student;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {
    private List<Student> students = new ArrayList<>();
    private void creatData(){
        for (int i = 0; i < 10; i++) {
            Student student = Student.builder()
                    .id(i)
                    .name("Nguyễn Văn " + i)
                    .address("Hà Nội " + i)
                    .dob(LocalDate.now())
                    .gpa(i)
                    .build();
            // camel case
            students.add(student);
        }
    }
    public List<Student> getAllStudents(){
        return students;
    }

    public void saveStudent(Student student) {

    }
}
