package com.example.travelbooking.controller.user.view;

import com.example.travelbooking.statics.Gender;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
@AllArgsConstructor
public class UserController {
    @GetMapping("/user/dashboard-user")
    public String dashboardUser() {
        return "management/user/dashboard-user";
    }

    @GetMapping("/user/user-profile")
    public String accountInfo(Model model) {
        model.addAttribute("genderList", Gender.values());

        return "management/user/user-profile";
    }
}
