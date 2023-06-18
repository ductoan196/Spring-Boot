package com.example.relationship_jpa_code_again.service;

import com.example.relationship_jpa_code_again.entity.User;
import com.example.relationship_jpa_code_again.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<User> getAllUser() {
       return userRepository.findAll();
    }
}
