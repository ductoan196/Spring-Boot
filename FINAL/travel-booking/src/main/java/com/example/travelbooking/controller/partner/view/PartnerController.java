package com.example.travelbooking.controller.partner.view;

import com.example.travelbooking.entity.Bed;
import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.entity.Room;
import com.example.travelbooking.entity.location.District;
import com.example.travelbooking.entity.location.Province;
import com.example.travelbooking.entity.location.Ward;
import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.model.request.partner.RoomSearchRequest;
import com.example.travelbooking.model.response.partner.CommonResponse;
import com.example.travelbooking.repository.*;
import com.example.travelbooking.security.SecurityUtils;
import com.example.travelbooking.service.user.AddressService;
import com.example.travelbooking.service.user.UserService;
import com.example.travelbooking.service.partner.RoomService;
import com.example.travelbooking.statics.BedType;
import com.example.travelbooking.statics.RoomStatus;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
@AllArgsConstructor
@RequestMapping
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class PartnerController {
    UserService userService;
    FacilityRepository facilityRepository;
    RoomRepository roomRepository;
    BedRepository bedRepository;
    ProvinceRepository provinceRepository;
    DistrictRepository districtRepository;
    WardRepository wardRepository;
    RoomService roomService;
    AddressService addressService;
    ObjectMapper objectMapper;

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
        model.addAttribute("room", room);

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

    @GetMapping("partner/dashboard-partner")
    public String dashboadPartner(Model model) {
        List<Province> provinces = provinceRepository.findAll();
        model.addAttribute("provinceList", provinces);
        return "management/partner/dashboard-partner";
    }

    @GetMapping("partner/hotel-profile")
    public String hotelProfile(Model model) {
        List<Province> provinces = provinceRepository.findAll();
        model.addAttribute("provinceList", provinces);
//        model.addAttribute("districtList", districts);
//        model.addAttribute("wardList", wards);
        return "management/partner/hotel-profile";
    }

    @GetMapping("/partner/room-management")
    public String searchRoomList(RoomSearchRequest request, Model model) {
        String currentUserEmail = SecurityUtils.getCurrentUserEmail()
                .orElseThrow(() -> new NotFoundException("Không tìm thấy currentEmail"));

        CommonResponse<?> commonResponse = roomService.searchRoom(request, currentUserEmail);

        model.addAttribute("roomList", commonResponse);
        model.addAttribute("currentPage", request.getPageIndex());
        return "management/partner/room-management";
    }

    @GetMapping("/partner/account-info")
    public String accountInfo(Model model) {

        return "management/partner/account-info";
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
