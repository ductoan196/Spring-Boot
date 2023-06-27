package com.example.demo.service;

import com.example.demo.model.Course;
import com.example.demo.model.Supporter;
import com.example.demo.model.Topic;
import com.example.demo.model.UpsertCourseRequest;
import com.example.demo.repository.CourseRepository;
import com.example.demo.repository.SupporterRepository;
import com.example.demo.repository.TopicRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class CourseService {

    private final CourseRepository courseRepository;
    private final SupporterRepository supporterRepository;
    private final TopicRepository topicRepository;
    ObjectMapper objectMapper;

    public Page<Course> getAllCourse(Integer page, Integer pageSize) {
        Pageable pageRequest = PageRequest.of(page - 1, pageSize);
        return courseRepository.findAll(pageRequest);
    }

    public Page<Course> getAllCourse(Integer page, Integer pageSize, String type) {
        Pageable pageRequest = PageRequest.of(page - 1, pageSize);
        return courseRepository.findByType(pageRequest, type);
    }

    public List<Course> getAllCourse(String type) {
        return courseRepository.findByType(type);
    }

    public Course getCourseDetail(Integer id) {
        return courseRepository.findById(id)
                .orElseThrow(() -> {
                    throw new RuntimeException("Not found course with id = " + id);
                });
    }

    public void creatCourse(UpsertCourseRequest request) {

        Supporter supporter = supporterRepository.findById(request.getSupporterId())
                .orElseThrow(() -> {
                    throw new RuntimeException("Not found course with id ");
                });

        Set<Topic> topics = new HashSet<>();
        List<Integer> topicIds = request.getTopicIds();

        List<Topic> topicList = new ArrayList<>();
        for (int i = 0; i < topicIds.size(); i++) {
            Topic topic = topicRepository.findById(topicIds.get(i))
                    .orElseThrow(() -> {
                        throw new RuntimeException("Not found course with id ");
                    });
            topics.add(topic);
        }
//        Course course = objectMapper.convertValue(request, Course.class);
        Course course = Course.builder()
                .name(request.getName())
                .description(request.getDescription())
                .thumbnail(request.getThumbnail())
                .type(request.getType())
                .supporter(supporter)
                .topics(topics)
                .build();
        courseRepository.save(course);
    }
}
