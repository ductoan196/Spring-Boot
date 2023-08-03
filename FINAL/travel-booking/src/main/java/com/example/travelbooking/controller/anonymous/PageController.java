package com.example.travelbooking.controller.anonymous;

import com.example.travelbooking.model.response.partner.RoomResponse;
import com.example.travelbooking.service.partner.RoomService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping()
@AllArgsConstructor
public class PageController {

    RoomService roomService;

//    @GetMapping("/")
//    public String homepage(Model model) {
//        List<RoomResponse> roomList = roomService.getAllRooms();
//        model.addAttribute("newProducts", roomList);
//        return "user/index";
//    }
}
