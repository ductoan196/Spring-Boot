package com.example.travelbooking.controller;

import com.example.travelbooking.entity.Bed;
import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.entity.Room;
import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.exception.UserNotFoundException;
import com.example.travelbooking.model.response.partner.RoomResponse;
import com.example.travelbooking.repository.BedRepository;
import com.example.travelbooking.repository.FacilityRepository;
import com.example.travelbooking.repository.RoomRepository;
import com.example.travelbooking.security.SecurityUtils;
import com.example.travelbooking.service.UserService;
import com.example.travelbooking.service.partner.HotelService;
import com.example.travelbooking.service.partner.RoomService;
import com.example.travelbooking.statics.BedType;
import com.example.travelbooking.statics.Gender;
import com.example.travelbooking.statics.RoomStatus;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.grpc.internal.ServiceConfigUtil;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
    @GetMapping("/home")
    public String home() {
        return "user/index";
    }

    @GetMapping("/home/v1")
    public String home1() {
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

    @GetMapping("partner/dashboard-partner")
    public String dashboadPartner() {
        return "management/partner/dashboard-partner";
    }

    @GetMapping("/partner/room-management")
    public String roomList(Model model) {
        List<Room> roomList = roomRepository.findAll();
//        List<RoomResponse> roomList = roomService.getAllRooms();
        model.addAttribute("roomList", roomList);
        return "management/partner/room-management";
    }

    @GetMapping("/partner/add-room")
    public String addRoom(Model model) {
        List<Facility> facilityList = facilityRepository.findAll();
        model.addAttribute("facilityList", facilityList);
        model.addAttribute("bedTypes", BedType.values());
        model.addAttribute("roomStatusList", RoomStatus.values());
        return "management/partner/add-room";
    }

    @GetMapping("/partner/rooms/{roomId}")
    public String editRoom(@PathVariable Long roomId, Model model) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy room trong danh sách"));
        model.addAttribute(room);

        List<Bed> beds = bedRepository.findByRoom(roomId);

        List<Facility> facilityList = facilityRepository.findAll();

        List<String> selectedFacilities = room.getFacilities().stream()
                .map(Facility::getName)
                .collect(Collectors.toList());

        model.addAttribute("facilityList", facilityList);
        model.addAttribute("selectedFacilities", selectedFacilities);
        model.addAttribute("bedTypes", BedType.values());
        model.addAttribute("roomStatusList", RoomStatus.values());
        model.addAttribute("beds", beds);
        return "management/partner/edit-room";
    }

    @GetMapping("/partner/coupon")
    public String coupon() {
        return "management/partner/coupon";
    }




    //Management-user
    @GetMapping("/user/dashboard-user")
    public String dashboardUser() {
        return "management/user/dashboard-user";
    }

    @GetMapping("/booking-user-management")
    public String bookingUser() {
        return "management/user/booking-user";
    }

    //Management admin
    @GetMapping("admin/dashboard-admin")
    public String dashboadAdmin() {
        return "management/admin/dashboard-admin";
    }
}
