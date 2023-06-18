package com.example.relationship_jpa_code_again.controller;

import com.example.relationship_jpa_code_again.entity.Image;
import com.example.relationship_jpa_code_again.service.ImageService;
import com.example.relationship_jpa_code_again.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.boot.autoconfigure.data.ConditionalOnRepositoryType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/users")
@AllArgsConstructor

public class UserController {
    private final UserService userService;
    private final ImageService imageService;

    //1. Upload file
    @PostMapping("{id}/files")
    public ResponseEntity<?> uploadFile(@ModelAttribute("file") MultipartFile file, @PathVariable Integer id) {
        Image image = imageService.uploadImage(id, file);
        return ResponseEntity.ok(image);
    }
}
