package com.example.techmaster_admin_code.controlelr;

import com.example.techmaster_admin_code.model.Course;
import com.example.techmaster_admin_code.model.Topic;
import com.example.techmaster_admin_code.service.CourseService;
import com.example.techmaster_admin_code.service.TopicService;
import lombok.AllArgsConstructor;
import org.springframework.boot.Banner;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping
@AllArgsConstructor
public class CourseController {

    private final CourseService courseService;
    private final TopicService topicService;

    @GetMapping("/")
    public String getAllCourse(@RequestParam(required = false, defaultValue = "1") Integer page,
                               @RequestParam(required = false, defaultValue = "6") Integer pageSize,
                               Model model) {
        Page<Course> pageInfo = courseService.getAllCourse(page, pageSize);
        List<Topic> topicList = topicService.getAllTopic();

        model.addAttribute("pageInfo", pageInfo);
        model.addAttribute("topicList", topicList);
        model.addAttribute("currentPage", page);

        return "course-list";
    }

    @GetMapping("/khoa-hoc/online")
    public String getOnlineCourse(@RequestParam(required = false, defaultValue = "1") Integer page,
                                  @RequestParam(required = false, defaultValue = "6") Integer pageSize,
                                  Model model) {
        Page<Course> pageInfo = courseService.getAllCourse(page, pageSize, "online");
        List<Topic> topicList = topicService.getAllTopic();

        model.addAttribute("pageInfo", pageInfo);
        model.addAttribute("topicList", topicList);
        model.addAttribute("currentPage", page);

        return "course-online-list";
    }

    @GetMapping("/khoa-hoc/onlab")
    public String getOnlabCourse(Model model) {
        List<Course> courseList = courseService.getAllCourse("onlab");
        List<Topic> topics = topicService.getAllTopic();
        return "course-onlab-list";
    }

    @GetMapping("khoa-hoc/{id}")
    public String getDetailCourse(@PathVariable Integer id, Model model) {
        Course course = courseService.getCourseDetail(id);
        model.addAttribute("course", course);
        return "detail";
    }
}
