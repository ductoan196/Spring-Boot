package com.example.thymeleaf02.service;

import com.example.thymeleaf02.Enum.Gender;
import com.example.thymeleaf02.Enum.Level;
import com.example.thymeleaf02.Enum.Major;
import com.example.thymeleaf02.model.Student;
import com.example.thymeleaf02.model.Teacher;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TeacherService {

    List<Teacher> teachers = new ArrayList<>();
    public void creatTeacherList(){
        for (int i = 0; i < 5; i++) {
            Teacher teacher = Teacher.builder()
                    .id(i)
                    .name("Trần Thị " + i)
                    .phone("Number" + i)
                    .dob(LocalDate.now())
                    .gender(Gender.MALE)
                    .major(Major.NATURAL_SCIENCES)
                    .level(Level.DOCTOR)
                    .build();
            teachers.add(teacher);
        }
    }
    public List<Teacher> getAllTeacher() {
        creatTeacherList();
        return teachers;
    }

    public void saveTeacher(Teacher teacher) {
        teachers.add(teacher);
    }
}
