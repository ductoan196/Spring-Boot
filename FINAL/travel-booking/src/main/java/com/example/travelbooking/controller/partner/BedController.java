package com.example.travelbooking.controller.partner;

import com.example.travelbooking.model.request.partner.BedRequestDTO;
import com.example.travelbooking.service.partner.BedService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("api/v1/partner/room/bed")
@AllArgsConstructor
public class BedController {

    BedService bedService;

    @PostMapping()
    public ResponseEntity<String> createBeds(@RequestBody BedRequestDTO bedRequestDTO) {
        try {
            bedService.createBed(bedRequestDTO);
            return ResponseEntity.ok("Bed đã được tạo thành công!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Đã xảy ra lỗi khi tạo bed.");
        }
    }
}
