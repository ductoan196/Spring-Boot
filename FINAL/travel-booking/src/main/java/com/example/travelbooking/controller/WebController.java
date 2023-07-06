package com.example.travelbooking.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping()
public class WebController {

    @GetMapping("/home")
    public String home() {
        return "index";
    }
    @GetMapping("/room-list")
    public String room() {
        return "room-list";
    }
    @GetMapping("/booking")
    public String booking() {
        return "booking";
    }
    @GetMapping("/dashboard")
    public String dashboard() {
        return "dashboard";
    }
}
