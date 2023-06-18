package com.example.pet_shop_management.controller;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
@AllArgsConstructor
@FieldDefaults(level =  AccessLevel.PRIVATE)
public class WebController {

    @GetMapping("/")
    public String getAllProduct(Model model) {

        return "index";
    }

}
