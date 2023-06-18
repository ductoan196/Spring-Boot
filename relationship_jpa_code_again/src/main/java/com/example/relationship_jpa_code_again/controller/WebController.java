package com.example.relationship_jpa_code_again.controller;

import com.example.relationship_jpa_code_again.entity.Image;
import com.example.relationship_jpa_code_again.entity.User;
import com.example.relationship_jpa_code_again.service.ImageService;
import com.example.relationship_jpa_code_again.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.boot.Banner;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Controller
@AllArgsConstructor

public class WebController {
    private UserService userService;
    private ImageService imageService;

    @GetMapping("/")
    public String getUserPage(Model model) {
        List<User> userList = userService.getAllUser();
        model.addAttribute("userList", userList);
        return "index";
    }

    @GetMapping("/user/{id}/files")
    public String getFilesPage(@PathVariable Integer id, Model model) {
        List<Image> imageList = imageService.getImageOfUser(id);
        model.addAttribute("imageList", imageList);
        model.addAttribute("userId", id);

        return "file";
    }
}
