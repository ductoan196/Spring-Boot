package com.example.techmaster_course_management.repository;

import com.example.techmaster_course_management.entity.Suppoter;
import com.example.techmaster_course_management.entity.Topic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TopicRepository extends JpaRepository<Topic, Integer> {
}
