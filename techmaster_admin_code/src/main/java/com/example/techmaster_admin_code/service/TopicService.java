package com.example.techmaster_admin_code.service;

import com.example.techmaster_admin_code.model.Topic;
import com.example.techmaster_admin_code.repository.TopicRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TopicService {
   private final TopicRepository topicRepository;
    public List<Topic> getAllTopic() {
       return topicRepository.findAll();
    }
}
