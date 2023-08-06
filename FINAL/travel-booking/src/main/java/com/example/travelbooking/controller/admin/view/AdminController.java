package com.example.travelbooking.controller.admin.view;

import com.example.travelbooking.model.request.admin.HotelSearchRequest;
import com.example.travelbooking.model.response.partner.CommonResponse;
import com.example.travelbooking.security.SecurityUtils;
import com.example.travelbooking.service.admin.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
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
    public String adminProfile() {
        return "management/admin/admin-profile";
    }

    @GetMapping("/admin/partner-management")
    public String roomList(HotelSearchRequest request, Model model) {

        CommonResponse<?> commonResponse = adminService.searchPartner(request);

        model.addAttribute("currentPage", request.getPageIndex());
        model.addAttribute("hotelList", commonResponse);
        return "management/admin/partner-management";
    }
}
