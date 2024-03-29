package com.example.travelbooking.controller;

import com.example.travelbooking.repository.BedRepository;
import com.example.travelbooking.repository.FacilityRepository;
import com.example.travelbooking.repository.RoomRepository;
import com.example.travelbooking.service.user.UserService;
import com.example.travelbooking.service.partner.RoomService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@AllArgsConstructor
@RequestMapping
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class HomeController {

    UserService userService;
    FacilityRepository facilityRepository;
    RoomRepository roomRepository;
    BedRepository bedRepository;
    RoomService roomService;
    ObjectMapper objectMapper;

    // User

    @GetMapping("/")
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

    @GetMapping("/tour-single")
    public String tourSingle() {
        return "user/tour-single1";
    }

    @GetMapping("/blog")
    public String blog() {
        return "user/blog_list";
    }

    @GetMapping("/blog-detail")
    public String blog_detail() {
        return "user/blog_detail";
    }


    @GetMapping("/recover_pass")
    public String recoverPass() {
        return "user/recover_password";
    }

    @GetMapping("/reset_new_password")
    public String resetPass() {
        return "user/reset_new_password";
    }

    @GetMapping("/term_policy")
    public String term() {
        return "user/term_policy";
    }

    //Notification
    @GetMapping("/success_page")
    public String successPage() {
        return "user/success-page";
    }

    @GetMapping("/success-reset-pass")
    public String successResetPass() {
        return "user/success-reset-password";
    }

    @GetMapping("/access-denied")
    public String fobidenPage() {
        return "user/notification/403";
    }


    //Management-partner
    @GetMapping("/partner/coupon")
    public String coupon() {
        return "management/partner/coupon";
    }

    @GetMapping("/maps")
    public String maps() {
        return "user/maps";
    }

    //Management-user


    @GetMapping("/booking-user-management")
    public String bookingUser() {
        return "management/user/booking-user";
    }

    //Management admin

}
