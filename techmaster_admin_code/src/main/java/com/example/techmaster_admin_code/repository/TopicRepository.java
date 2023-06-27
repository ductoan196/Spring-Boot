package com.example.techmaster_admin_code.repository;

import com.example.techmaster_admin_code.model.Course;
import com.example.techmaster_admin_code.model.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TopicRepository extends JpaRepository<Topic, Integer> {
}
