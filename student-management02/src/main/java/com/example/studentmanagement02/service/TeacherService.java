package com.example.studentmanagement02.service;


import com.example.studentmanagement02.entity.Student;
import com.example.studentmanagement02.entity.Teacher;
import com.example.studentmanagement02.model.StudentModel;
import com.example.studentmanagement02.model.TeacherModel;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class TeacherService {
    private static int AUTO_ID= 1;
    private List<Teacher> teachers = new ArrayList<>();
    ObjectMapper objectMapper;

    public List<TeacherModel> getAllTeacher() {
        List<TeacherModel> result = new ArrayList<>();
        for (int i = 0; i < teachers.size(); i++) {
            Teacher teacher = teachers.get(i);
            TeacherModel teacherModel = objectMapper.convertValue(teacher, TeacherModel.class);
            result.add(teacherModel);
        }
        return result;
    }


    public void saveTeacher(TeacherModel teacherModel) {
        Teacher teacher = objectMapper.convertValue(teacherModel, Teacher.class);
        teachers.add(teacher);
        teacher.setId(AUTO_ID);
        AUTO_ID++;
    }


    public TeacherModel findById(int id) {
        Optional<Teacher> teacherOptional = teachers
                .stream()
                .filter(s-> s.getId() == id)
                .findFirst();
        if (teacherOptional.isEmpty()) {
            return null;
        }

        Teacher teacher = teacherOptional.get();
        return objectMapper.convertValue(teacher, TeacherModel.class);
    }

    public void updateTeacher(TeacherModel teacherModel) {
        teachers.forEach(s->{
            if (s.getId() != teacherModel.getId()) {
                return;
            }
            s.setName(teacherModel.getName());
            s.setPhone(teacherModel.getPhone());
            s.setGender(teacherModel.getGender());
            s.setDob(teacherModel.getDob());
            s.setLevel(teacherModel.getLevel());
            s.setSpecialize(teacherModel.getSpecialize());
        });
    }


    public void deleteTeacher(int id) {
        teachers.removeIf(s -> s.getId() == id);
    }
}
