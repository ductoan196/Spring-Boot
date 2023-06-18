package com.example.relationship_jpa_code_again.repository;

import com.example.relationship_jpa_code_again.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
