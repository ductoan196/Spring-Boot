package com.example.travelbooking.controller.admin.view;

import com.example.travelbooking.model.request.admin.HotelSearchRequest;
import com.example.travelbooking.model.request.admin.UserSearchRequest;
import com.example.travelbooking.model.response.partner.CommonResponse;
import com.example.travelbooking.security.SecurityUtils;
import com.example.travelbooking.service.admin.AdminService;
import com.example.travelbooking.statics.Gender;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Controller
@RequestMapping
@AllArgsConstructor
public class AdminController {

    AdminService adminService;
    @GetMapping("admin/dashboard-admin")
    public String dashboadAdmin() {
        return "management/admin/dashboard-admin";
    }

    @GetMapping("admin/admin-profile")
    public String adminProfile(Model model) {

        model.addAttribute("genderList", Gender.values());
        return "management/admin/admin-profile";
    }

    @GetMapping("/admin/change-password")
    public String changePassword(Model model) {
        return "management/admin/change-password";
    }

    @GetMapping("/admin/partner-management")
    public String roomList(HotelSearchRequest request, Model model) {

        CommonResponse<?> commonResponse = adminService.searchPartner(request);

        model.addAttribute("currentPage", request.getPageIndex());
        model.addAttribute("hotelList", commonResponse);
        return "management/admin/partner-management";
    }

    @GetMapping("/admin/user-management")
    public String userList(UserSearchRequest request, Model model) {

        CommonResponse<?> commonResponse = adminService.searchUser(request);

        model.addAttribute("currentPage", request.getPageIndex());
        model.addAttribute("userList", commonResponse);
        return "management/admin/user-management";
    }

}
