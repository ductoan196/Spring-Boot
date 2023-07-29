package com.example.travelbooking.controller.partner;

import com.example.travelbooking.entity.Hotel;
import com.example.travelbooking.service.UserService;
import com.example.travelbooking.service.partner.HotelService;
import com.example.travelbooking.statics.Gender;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Slf4j
@Controller
@RequestMapping("/api/v1/partner")
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class HotelController {

    HotelService hotelService;
    UserService userService;

    // Lấy thông tin chi tiết khách sạn
    @GetMapping("/dashboard-partner")
    public String hotelInfo(Model model) {
        model.addAttribute("genders", Gender.values());
        return "/management/partner/dashboard-partner";
    }

    @GetMapping("/hotel")
    public ResponseEntity<?> getHotelByEmail(@RequestParam String email, Model model) {
        Hotel hotel = hotelService.getHotelByEmail(email);
        return new ResponseEntity<>(hotel, HttpStatus.OK);
    }

    @PutMapping("/hotel")
    public ResponseEntity<?> updateHotel(@RequestParam(value = "file", required = false) MultipartFile file,
                                         @RequestParam("name") String name,
                                         @RequestParam("phone") String phone,
                                         @RequestParam("email") String email,
                                         @RequestParam("address") String address) {
        try {
            Hotel updatedHotel = hotelService.updateHotelwithAvatar(file, name, phone, address, email);
            if (updatedHotel != null) {
                return ResponseEntity.ok(updatedHotel);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update hotel");
        }
    }
}
