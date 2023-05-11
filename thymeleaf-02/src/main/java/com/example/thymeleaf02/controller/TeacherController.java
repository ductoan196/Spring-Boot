package com.example.thymeleaf02.controller;

import com.example.thymeleaf02.model.Student;
import com.example.thymeleaf02.model.Teacher;
import com.example.thymeleaf02.service.StudentService;
import com.example.thymeleaf02.service.TeacherService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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

//    @GetMapping("fill-id")
//
//
    @GetMapping("/edit-form")
    public String creatTeacherForm(Model model, Teacher teacher){
       model.addAttribute("editedTeacher", teacher);
       return "edit-teacher";
    }

    @PostMapping("/update")
    public String updateTeacher(@ModelAttribute("teacher") Teacher teacher){
        teacherService.editTeacherInfo(teacher);
        return "redirect:/teachers";
    }

    @GetMapping("/delete-form")
    public String deleteTeacherForm(Model model, Teacher teacher){
        model.addAttribute("deletedTeacher", teacher);
        return "delete-teacher";
    }
    @PostMapping("/delete")
    public String deleteTeacher(@ModelAttribute("teacher") Teacher teacher){
        teacherService.deleteTeacherInfo(teacher);
        return "redirect:/teachers";
    }
}
