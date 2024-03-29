package com.example.travelbooking.controller.partner.api;

import com.example.travelbooking.entity.Hotel;
import com.example.travelbooking.model.request.partner.UpdateHotelRequest;
import com.example.travelbooking.service.user.UserService;
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
import org.springframework.web.bind.annotation.*;

@Slf4j
@Controller
@RequestMapping("/api/v1/partner")
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class HotelController {

    HotelService hotelService;

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
    public ResponseEntity<?> updateHotel(@ModelAttribute UpdateHotelRequest request) {
        try {
            Hotel updatedHotel = hotelService.updateHotel(request);
            System.out.println(updatedHotel);
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
