package com.example.techmaster_course_management.service;

import com.example.techmaster_course_management.entity.Course;
import com.example.techmaster_course_management.repository.CourseRepository;
import com.example.techmaster_course_management.statics.Type;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CourseService {

    CourseRepository courseRepository;


    public List<Course> getAllCourse() {
        return courseRepository.findAll();
    }

    public List<Course> getAllOnlineCourse() {
        return courseRepository.findAll().stream()
                .filter(course -> course.getType()== Type.ONLINE)
                .collect(Collectors.toList());
    }

    public List<Course> getAllOnlabCourse() {
        return courseRepository.findAll().stream()
                .filter(course -> course.getType()== Type.OFFLINE)
                .collect(Collectors.toList());
    }


    public Course findCourseById(Integer id) {
        return courseRepository.findById(id)
                .orElseThrow(() ->{
                    throw new RuntimeException("Không tìm thấy Course id");}
                );
    }
}
