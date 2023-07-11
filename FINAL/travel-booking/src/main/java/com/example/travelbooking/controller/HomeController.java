package com.example.travelbooking.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping()
public class HomeController {

    // User
    @GetMapping("/home")
    public String home() {
        return "user/index";
    }

    @GetMapping("/booking")
    public String booking() {
        return "user/booking";
    }

    @GetMapping("/tour")
    public String tour() {
        return "user/tour_list";
    }

    @GetMapping("/hotel")
    public String hotel() {
        return "user/hotel_list";
    }

    @GetMapping("/search_hotel")
    public String search() {
        return "user/search_hotel_list";
    }

    @GetMapping("/term_policy")
    public String term() {
        return "user/term_policy";
    }

    //Admin
    @GetMapping("/dashboard")
    public String dashboard() {
        return "admin/dashboard";
    }
    @GetMapping("/coupon")
    public String coupon() {
        return "admin/coupon";
    }
}
