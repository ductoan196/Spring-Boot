package com.example.studentmanagement02.service;

import com.example.studentmanagement02.entity.Student;
import com.example.studentmanagement02.model.StudentModel;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class StudentService {
    private final List<Student> students = new ArrayList<>();  //Database
    private  static  int AUTO_ID =1;
    ObjectMapper objectMapper;


    public List<StudentModel> getAllStudent(){
        List<StudentModel> result = new ArrayList<>();
        for (int i = 0; i < students.size(); i++) {
            Student student = students.get(i);

//            StudentModel studentModel = StudentModel.builder()
//                    .id(student.getId())
//                    .name(student.getName())
//                    .phone(student.getPhone())
//                    .gpa(student.getGpa())
//                    .dob(student.getDob())
//                    .build();
            StudentModel studentModel= objectMapper.convertValue(student,StudentModel.class);
            result.add(studentModel);
        }

        return result;
    }

    public void saveStudent(StudentModel studentModel) {
        Student student = objectMapper.convertValue(studentModel, Student.class);
        student.setId(AUTO_ID);
        students.add(student);
        AUTO_ID++;
    }

    public void delete(int id) {
        students.removeIf(s-> s.getId() == id);
    }

    public StudentModel findById(int id) {
        Optional<Student> studentOptional = students
                .stream()
                .filter(s-> s.getId() == id)
                .findFirst();
        if (studentOptional.isEmpty()) {
            return null;
        }

        Student student = studentOptional.get();
        return objectMapper.convertValue(student, StudentModel.class);
    }

    public void updateStudent(StudentModel studentModel) {
        students.forEach(s->{
            if (s.getId() != studentModel.getId()) {
                return;
            }
            s.setName(studentModel.getName());
            s.setPhone(studentModel.getPhone());
            s.setGpa(studentModel.getGpa());
            s.setDob(studentModel.getDob());
        });
    }
}
