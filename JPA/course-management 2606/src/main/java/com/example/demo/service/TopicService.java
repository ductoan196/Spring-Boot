package com.example.demo.service;

import com.example.demo.entity.Topic;
import com.example.demo.exception.NotFoundException;
import com.example.demo.model.request.UpsertTopicRequest;
import com.example.demo.repository.TopicRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TopicService {

    private final TopicRepository topicRepository;

    public List<Topic> getAllTopic() {
        return topicRepository.findAll();
    }

    public Page<Topic> getAllTopic(Integer page, Integer pageSize) {
        Pageable pageRequest = PageRequest.of(page-1, pageSize);
        return topicRepository.findAll(pageRequest);
    }

    public Topic createTopic(UpsertTopicRequest topicRequest) {
        Topic topic = Topic.builder()
                .name(topicRequest.getName())
                .build();

        topicRepository.save(topic);
        System.out.println(topicRepository.findAll());
        return topic;
    }

    public Topic updateTopic(Integer id, UpsertTopicRequest topicRequest) {
        Topic topic = topicRepository.findById(id)
                .orElseThrow(() -> {
                    throw new NotFoundException("Not found topic with id = " + id);
                });
        topic.setName(topicRequest.getName());
        topicRepository.save(topic);
        return topic;
    }
}
