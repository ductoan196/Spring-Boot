package com.example.thymeleaf02.controller;

import com.example.thymeleaf02.model.Student;
import com.example.thymeleaf02.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.Banner;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("students")
public class StudentController {
//    @Autowired
    StudentService studentService;

    @GetMapping
    public String getStudent(Model model){
        List<Student> students = studentService.getAllStudent();
        model.addAttribute("studentList",students);
        return "student-list";
    }

    @GetMapping("/creat-form")
    public String forwardToCreatForm(Model model, Student student){
        model.addAttribute("newStudent",student);
        return "creat-student";
    }

    @PostMapping
    public String creatNewStudent(@ModelAttribute("student") Student student){
        studentService.saveStudent(student);
        return "redirect:/students";
    }
}
