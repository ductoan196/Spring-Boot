package com.example.thymeleaf02.controller;

import com.example.thymeleaf02.model.Teacher;
import com.example.thymeleaf02.service.StudentService;
import com.example.thymeleaf02.service.TeacherService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("teachers")
@AllArgsConstructor

public class TeacherController {
    TeacherService teacherService;

    @GetMapping
   public String getTeacher(Model model){
        List<Teacher> teachers = teacherService.getAllTeacher();
        model.addAttribute("teacherList",teachers);
        return "teacher-list";
    }

    @GetMapping("/creat-form")
    public String forwardtoCreatTeacherForm(Model model, Teacher teacher){
        model.addAttribute("newTeacher", teacher);
        return "creat-teacher";
    }

    @PostMapping
    public String creatNewTeacher(@ModelAttribute("teacher") Teacher teacher){
        teacherService.saveTeacher(teacher);
        return "redirect:/teachers";
    }
}
