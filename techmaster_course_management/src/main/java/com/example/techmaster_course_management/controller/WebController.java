package com.example.techmaster_course_management.controller;

import com.example.techmaster_course_management.entity.Course;
import com.example.techmaster_course_management.repository.CourseRepository;
import com.example.techmaster_course_management.service.CourseService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping
@AllArgsConstructor

public class WebController {

    CourseService courseService;

    @GetMapping("/")
    public String getAllCourse(Model model) {
        List<Course> courseList = courseService.getAllCourse();
        model.addAttribute("courseList", courseList);

        return "course-list";
    }

    @GetMapping("/khoa-hoc/online")
    public String getOnlineProduct(Model model) {
        List<Course> onlineCourseList = courseService.getAllOnlineCourse();
        model.addAttribute("courseList", onlineCourseList);

        return "course-online-list";
    }

    @GetMapping("/khoa-hoc/onlab")
    public String getOnlabProduct(Model model) {
        List<Course> onlabCourseList = courseService.getAllOnlabCourse();
        model.addAttribute("courseList", onlabCourseList);

        return "course-onlab-list";
    }

    @GetMapping("/khoa-hoc/{id}")
    public ResponseEntity getDetail(@PathVariable Integer id) {
        Course course = courseService.findCourseById(id);

        return ResponseEntity.ok(course);
    }
}
