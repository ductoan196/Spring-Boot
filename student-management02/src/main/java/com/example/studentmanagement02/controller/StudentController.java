package com.example.studentmanagement02.controller;

import com.example.studentmanagement02.entity.Student;
import com.example.studentmanagement02.model.StudentModel;
import com.example.studentmanagement02.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.tags.form.ErrorsTag;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("students")
public class StudentController {
//    @Autowired
    StudentService studentService;

    @GetMapping
    public String getStudent(org.springframework.ui.Model model){
        List<StudentModel> studentModels = studentService.getAllStudent();
        model.addAttribute("studentList", studentModels);
        return "student-list";
    }

    @GetMapping("/creat-form")
    public String forwardToCreatForm(org.springframework.ui.Model model, StudentModel student){
        model.addAttribute("newStudent",student);
        return "creat-student";
    }

    @PostMapping
    public String creatNewStudent(@ModelAttribute("newStudent") @Valid StudentModel studentModel, Errors errors){
        if (null != errors && errors.getErrorCount() >0) {
            return "creat-student";
        } else {
            studentService.saveStudent(studentModel);
            return "redirect:/students";
        }
    }


    @GetMapping("/{id}/delete")
    public String deleteStudent(@PathVariable int id){
        studentService.delete(id);
        return "redirect:/students";
    }

    @GetMapping("/{id}/edit")
    public String forwardToEditForm(@PathVariable int id, Model model){

        StudentModel studentModel = studentService.findById(id);
        model.addAttribute("student", studentModel);
        return "edit-student";
    }


    @PostMapping("/update")
    public String updateStudent(@ModelAttribute("student") @Valid  StudentModel studentModel, Errors errors){
        if (null != errors && errors.getErrorCount() >0) {

            return "edit-student";
        } else {
            studentService.updateStudent(studentModel);
            return "redirect:/students";
        }
    }

}
