package com.example.demo.controller;

import com.example.demo.model.Course;
import com.example.demo.model.Supporter;
import com.example.demo.model.Topic;
import com.example.demo.model.UpsertCourseRequest;
import com.example.demo.service.CourseService;
import com.example.demo.service.SupporterService;
import com.example.demo.service.TopicService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@AllArgsConstructor
public class AdminController {
    private final CourseService courseService;
    private final TopicService topicService;
    private final SupporterService supporterService;


    @GetMapping("/admin/courses")
    public String getAllCourse(@RequestParam(required = false, defaultValue = "1") Integer page,
                               @RequestParam(required = false, defaultValue = "6") Integer pageSize,
//                               @RequestParam(required = false) String topic,
//                               @RequestParam(required = false) String term,
                               Model model) {
        Page<Course> pageInfo = courseService.getAllCourse(page, pageSize);
        List<Topic> topicList = topicService.getAllTopic();
        model.addAttribute("pageInfo", pageInfo);
        model.addAttribute("currentPage", page);
        return "admin/course-list";
    }

    @GetMapping("/admin/courses/create")
    public String getOnlineCourse(@RequestParam(required = false, defaultValue = "1") Integer page,
                                  @RequestParam(required = false, defaultValue = "6") Integer pageSize,
                                  Model model) {
        Page<Course> pageInfo = courseService.getAllCourse(page, pageSize, "online");
        List<Supporter> supporterList = supporterService.getAllSupporters();
        List<Topic> topicList = topicService.getAllTopic();

        model.addAttribute("pageInfo", pageInfo);
        model.addAttribute("currentPage", page);
        model.addAttribute("topicList", topicList);
        model.addAttribute("supporterList", supporterList);
        return "admin/course-create";
    }

    @PostMapping("/api/v1/admin/courses")
    public ResponseEntity<?> creatCourse(@RequestBody UpsertCourseRequest request) {
        courseService.creatCourse(request);
        return ResponseEntity.ok(null);
    }
}
