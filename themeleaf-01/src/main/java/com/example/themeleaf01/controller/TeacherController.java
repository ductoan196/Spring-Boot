package com.example.themeleaf01.controller;

import com.example.themeleaf01.model.Teacher;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("teachers")
public class TeacherController {
    @GetMapping

    public String getStudent(Model model){
        List<Teacher> teachers = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            Teacher teacher = Teacher.builder()
                    .id(i)
                    .name("Name " + i)
                    .phone("Phone " + i)
                    .dob(LocalDate.now())
                    .specialization("Subject "+i)
                    .build();
            teachers.add(teacher);
        }

        model.addAttribute("teacherList",teachers);
        return "teacher-list";
    }

}
