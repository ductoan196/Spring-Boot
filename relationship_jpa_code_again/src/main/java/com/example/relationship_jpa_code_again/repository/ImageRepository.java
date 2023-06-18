package com.example.relationship_jpa_code_again.repository;

import com.example.relationship_jpa_code_again.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageRepository extends JpaRepository<Image, Integer> {
    List<Image> findByUser_Id (Integer id);
}
