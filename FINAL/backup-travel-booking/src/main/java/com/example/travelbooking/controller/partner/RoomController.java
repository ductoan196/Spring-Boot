package com.example.travelbooking.controller.partner;

import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.model.request.partner.CreateRoomRequest;
import com.example.travelbooking.service.partner.FacilityService;
import com.example.travelbooking.service.partner.RoomService;
import com.example.travelbooking.statics.BedType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Arrays;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/api/v1/partner/rooms")
public class RoomController {
    RoomService roomService;
    FacilityService facilityService;

//    //Chuyển đến trang tạo phòng
//    @GetMapping("/create-room")
//    public String createNewRoomForm(Model model) {
//        List<BedType> bedTypes = Arrays.asList(BedType.values());
//        List<Facility> facilities = facilityService.getAllFacility();
//
//        model.addAttribute("bedTypes", bedTypes);
//        model.addAttribute("facilities", facilities);
//        model.addAttribute("createRoomRequest", new CreateRoomRequest());
//        return "management/partner/add-room";
//    }
}
