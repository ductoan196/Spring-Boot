package com.example.themeleaf01.controller;

import com.example.themeleaf01.model.Student;
import com.example.themeleaf01.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/students")
public class StudentController {
    @Autowired
    StudentService studentService;

    @RequestMapping
    public String getStudents(Model model) {
        List<Student> students = new ArrayList<>();
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
        model.addAttribute("danhSachSinhVien", students);
        return "student-list";
    }

    @PostMapping
    public String creatNewStudent(Model model, Student student){
        studentService.saveStudent(student);
        return "redirect:/students";
    }
}
