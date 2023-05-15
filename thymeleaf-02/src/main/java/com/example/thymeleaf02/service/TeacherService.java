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
                    .major(Major.NATURAL_SCIENCE)
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
        teacher.setId(teachers.size()+1);
        teachers.add(teacher);
    }

    public Teacher findById(int id) {
        for(Teacher teacher: teachers){
            if (teacher.getId()==id){
                return teacher;
            }
        }
        return null;
    }

    public void editTeacherInfo(Teacher teacher) {
        for (int i = 0; i < teachers.size(); i++) {
            Teacher t = teachers.get(i);
            if (t.getId() == teacher.getId()) {
                teachers.set(i, teacher);
                return;
            }
        }
    }

    public void deleteTeacherInfo(Teacher teacher) {
        teachers.removeIf(t -> t.getId() == teacher.getId());
    }

//    public void deleteTeacher(String id) {
//        teachers
//                .stream()
//                .filter()
//    }
}
