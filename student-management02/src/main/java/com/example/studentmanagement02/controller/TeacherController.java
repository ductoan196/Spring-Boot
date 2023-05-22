package com.example.studentmanagement02.controller;

import com.example.studentmanagement02.entity.Teacher;
import com.example.studentmanagement02.model.TeacherModel;
import com.example.studentmanagement02.service.TeacherService;
import com.example.studentmanagement02.statics.Gender;
import com.example.studentmanagement02.statics.Level;
import com.example.studentmanagement02.statics.Specialize;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("teachers")
public class TeacherController {

    TeacherService teacherService;

    @GetMapping
    public String getStudent(org.springframework.ui.Model model) {
        List<TeacherModel> teacherModels = teacherService.getAllTeacher();
        model.addAttribute("teacherList", teacherModels);
        return "teacher-list";
    }

    private void addOptionListsToModel(Model model) {
        List<Gender> genders = new ArrayList<>(Arrays.asList(Gender.values()));
        model.addAttribute("genderList", genders);

        List<Level> levels = new ArrayList<>(Arrays.asList(Level.values()));
        model.addAttribute("levelList", levels);

        List<Specialize> specializes = new ArrayList<>(Arrays.asList(Specialize.values()));
        model.addAttribute("specializeList", specializes);
    }

    @GetMapping("/creat-form")
    public String forwardToCreatForm(org.springframework.ui.Model model, TeacherModel teacher) {
        addOptionListsToModel(model);

        model.addAttribute("newTeacher", teacher);
        return "creat-teacher";
    }

    @PostMapping
    public String creatNewTeacher(@ModelAttribute("newTeacher") @Valid TeacherModel teacherModel, Errors errors, Model model) {
        if (null != errors && errors.getErrorCount() > 0) {
            addOptionListsToModel(model);
            return "creat-teacher";
        } else {
            teacherService.saveTeacher(teacherModel);
            return "redirect:/teachers";
        }
    }

    @GetMapping("/{id}/edit")
    public String forwardToEditForm(@PathVariable int id, Model model) {
        addOptionListsToModel(model);
        TeacherModel teacherModel = teacherService.findById(id);
        model.addAttribute("teacher", teacherModel);
        return "edit-teacher";
    }

    @PostMapping("/update")
    public String updateTeacher(@ModelAttribute("teacher") @Valid TeacherModel teacherModel, Errors errors, Model model) {
        if (null != errors && errors.getErrorCount() > 0) {
            addOptionListsToModel(model);
            return "creat-teacher";
        } else {
            teacherService.updateTeacher(teacherModel);
        }
        return "redirect:/teachers";
    }

    @GetMapping("/{id}/delete")
    public String deleteStudent(@PathVariable int id){
        teacherService.deleteTeacher(id);
        return "redirect:/teachers";
    }
}
