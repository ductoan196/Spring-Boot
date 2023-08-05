package com.example.travelbooking.controller.admin.view;

import com.example.travelbooking.model.request.admin.PartnerSearchRequest;
import com.example.travelbooking.model.request.partner.RoomSearchRequest;
import com.example.travelbooking.model.response.partner.CommonResponse;
import com.example.travelbooking.service.admin.AdminService;
import com.example.travelbooking.statics.RoomStatus;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
@AllArgsConstructor
public class AdminController {

    AdminService adminService;

    @GetMapping("/admin/partner-management")
    public String roomList(PartnerSearchRequest request, Model model) {

        CommonResponse<?> commonResponse = adminService.searchPartner(request);

        model.addAttribute("roomStatusList", RoomStatus.values());
        model.addAttribute("roomList", commonResponse);
        return "management/admin/partner-management";
    }
}
