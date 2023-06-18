package com.example.hellojpa;

import com.example.hellojpa.entity.Student;
import com.example.hellojpa.repository.StudentRepository;
import com.github.javafaker.Faker;
import lombok.AllArgsConstructor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@SpringBootTest
public class StudentTest {

    @Autowired
    private  StudentRepository studentRepository;

    @Autowired
    private Faker faker;

    @Test
    void save_student() {
        for (int i = 0; i < 30; i++) {
            Student student = new Student(
                    null,
                    faker.name().fullName(),
                    faker.internet().emailAddress()
            );
            studentRepository.save(student);
        }

    }

    @Test
    void findAll_Pageable() {
//        PageRequest request = PageRequest.of(1, 10);
//        Page<Student> page = studentRepository.findAll(request);
//        page.getContent().forEach(System.out::println);
//
//        PageRequest request1 = PageRequest.of(1, 10);
//        Page<Student> page1 = studentRepository.getAllStudent(request1);
//
//        page1.getContent().forEach(System.out::println);
    }

    @Test
    void findByNameIgnoreCase() {
//        PageRequest request = PageRequest.of(1, 5);
//        Page<Student> page = studentRepository.findByNameContainingIgnoreCase("A", request);
//        page.getContent().forEach(System.out::println);
//
//        PageRequest request1 = PageRequest.of(1, 5);
//        Page<Student> page1 = studentRepository.findByNameContainingIgnoreCase("a", request1);
//        page1.getContent().forEach(System.out::println);
    }
}
