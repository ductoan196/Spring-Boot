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

    @GetMapping("/hotel-detail")
    public String hotel_detail() {
        return "user/hotel_detail";
    }

    @GetMapping("/blog")
    public String blog() {
        return "user/blog_list";
    }

    @GetMapping("/blog-detail")
    public String blog_detail() {
        return "user/blog_detail";
    }

    @GetMapping("/search_hotel")
    public String search() {
        return "user/search_hotel_list";
    }

    @GetMapping("/recover_pass")
    public String recoverPass() {
        return "user/recover_password";
    }

    @GetMapping("/term_policy")
    public String term() {
        return "user/term_policy";
    }

    @GetMapping("/success_page")
    public String successPage() {
        return "user/success-page";
    }

    //Management-partner
    @GetMapping("partner/dashboard")
    public String dashboard() {
        return "management/partner/dashboard";
    }
    @GetMapping("partner/coupon")
    public String coupon() {
        return "management/partner/coupon";
    }

    //Management-user
    @GetMapping("/dashboard-user")
    public String dashboardUser() {
        return "management/user/dashboard-user";
    }

    @GetMapping("/booking-user-managent")
    public String bookingUser() {
        return "management/user/booking-user";
    }
}
