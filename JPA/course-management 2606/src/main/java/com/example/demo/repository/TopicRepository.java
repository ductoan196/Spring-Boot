package com.example.demo.repository;

import com.example.demo.entity.Course;
import com.example.demo.entity.Topic;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface TopicRepository extends JpaRepository<Topic, Integer> {
    Set<Topic> findByIdIn(List<Integer> ids);

}