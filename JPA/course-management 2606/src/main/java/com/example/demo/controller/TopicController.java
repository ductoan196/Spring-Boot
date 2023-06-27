package com.example.demo.controller;

import com.example.demo.entity.Topic;
import com.example.demo.model.request.UpsertTopicRequest;
import com.example.demo.service.TopicService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;

@Controller
@AllArgsConstructor
public class TopicController {
    TopicService topicService;

    //Danh sách View
    @GetMapping("admin/topics")
    public String getTopics(@RequestParam(required = false, defaultValue = "1") int page,
                            @RequestParam(required = false, defaultValue = "5") int pageSize, Model model) {

        Page<Topic> topicPage = topicService.getAllTopic(page, pageSize);
        model.addAttribute("currentPage", page);
        model.addAttribute("topicPage", topicPage);
        return "admin/topic/topic-list";
    }

//    @GetMapping("admin/topics/{id}")
//    public String getDetailTopic(@PathVariable Integer id) {
//        Topic topic
//    }

    //Danh sách API

    @PostMapping("/api/v1/admin/topics")
    public ResponseEntity<?> createTopic(@Valid @RequestBody UpsertTopicRequest topicRequest) {
        Topic topic = topicService.createTopic(topicRequest);
        return new ResponseEntity<>(topic, HttpStatus.CREATED);
    }

    @GetMapping("/api/v1/admin/topic/{id}")
    public ResponseEntity<?> getTopic(@PathVariable Integer id) {
        Topic topic = topicService.findById(id);
        return ResponseEntity.ok(topic);
    }

    @PutMapping("/api/admin/topics/{id}")
    public ResponseEntity<?> updateTopic(@PathVariable Integer id, @Valid @RequestBody UpsertTopicRequest topicRequest) {
        Topic topic = topicService.updateTopic(id, topicRequest);
        return ResponseEntity.ok(topic);
    }

    @DeleteMapping("api/admin/topics/{id}")
    public ResponseEntity<?> deleteTopic(@PathVariable Integer id) {
        topicService.deleteById(id);
        return ResponseEntity.ok(null);
    }

}
