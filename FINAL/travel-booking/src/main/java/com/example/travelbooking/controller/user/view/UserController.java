package com.example.travelbooking.controller.user.view;

import com.example.travelbooking.entity.Hotel;
import com.example.travelbooking.entity.Room;
import com.example.travelbooking.entity.location.District;
import com.example.travelbooking.entity.location.Ward;
import com.example.travelbooking.model.request.admin.HotelSearchRequest;
import com.example.travelbooking.model.request.partner.RoomSearchRequest;
import com.example.travelbooking.model.request.user.RoomSearchRequestByUser;
import com.example.travelbooking.model.response.admin.HotelSearchResponse;
import com.example.travelbooking.model.response.partner.CommonResponse;
import com.example.travelbooking.model.response.partner.RoomResponse;
import com.example.travelbooking.repository.HotelRepository;
import com.example.travelbooking.service.partner.HotelService;
import com.example.travelbooking.service.partner.RoomService;
import com.example.travelbooking.service.user.AddressService;
import com.example.travelbooking.statics.Gender;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping
@AllArgsConstructor
public class UserController {
    HotelService hotelService;
    RoomService roomService;
    AddressService addressService;

    @GetMapping("/user/dashboard-user")
    public String dashboardUser() {
        return "management/user/dashboard-user";
    }

    @GetMapping("/user/user-profile")
    public String accountInfo(Model model) {
        model.addAttribute("genderList", Gender.values());

        return "management/user/user-profile";
    }

    @GetMapping("/hotels")
    public String search(RoomSearchRequestByUser request, Model model) {
        CommonResponse<?> commonResponse = roomService.searchRoomByUser(request);

        model.addAttribute("hotelList", commonResponse);
        model.addAttribute("currentPage", request.getPageIndex());
        return "user/search_hotel_list";
    }

    @GetMapping("/hotels/{id}")
    public String hotelDetail(@PathVariable Long id, Model model) {
        List<Room> roomList = roomService.findByHotelId(id);
        Hotel hotel = hotelService.findByHotelId(id);

        model.addAttribute("hotelInfo", hotel );
        model.addAttribute("roomList", roomList);
        return "user/hotel-detail";
    }

    @GetMapping("/bookings/checkout")
    public String checkout() {
        return "/user/checkout";
    }

    // API để lấy danh sách District tương ứng với Province
    @GetMapping("/get-districts")
    public ResponseEntity<?> getDistricts(@RequestParam String province) {
        List<District> districtList = addressService.getDistrictsByProvince(province);
        return ResponseEntity.ok(districtList);
    }

    // API để lấy danh sách Ward tương ứng với District
    @GetMapping("/get-wards")
    public ResponseEntity<?> getWards(@RequestParam String districtCode) {
        List<Ward> wardList= addressService.getWardsByDistrict(districtCode);
        return ResponseEntity.ok(wardList);
    }
}
