package com.example.techmaster_course_management.repository;

import com.example.techmaster_course_management.entity.Suppoter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SuppoterRepository extends JpaRepository<Suppoter, Integer> {
}
