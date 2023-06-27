package com.example.techmaster_admin_code.repository;

import com.example.techmaster_admin_code.model.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {
    Page<Course> findByType(Pageable pageRequest, String type);

    List<Course> findByType(String type);
}
