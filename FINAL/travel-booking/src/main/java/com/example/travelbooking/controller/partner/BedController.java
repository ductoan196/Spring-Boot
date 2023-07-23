package com.example.travelbooking.controller.partner;

import com.example.travelbooking.entity.Amenity;
import com.example.travelbooking.model.request.partner.CreateAmenityRequest;
import com.example.travelbooking.model.request.partner.UpdateAmenityRequest;
import com.example.travelbooking.service.partner.AmenityService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/api/v1/partners/beds")

public class BedController {

    AmenityService amenityService;

    // API để lấy danh sách giường
    @GetMapping
    public ResponseEntity<List<Amenity>> getAllBeds() {
        List<Amenity> amenities = amenityService.getAllBed();
        return new ResponseEntity<>(amenities, HttpStatus.OK);
    }

    // API để tạo mới giường
    @PostMapping
    public ResponseEntity<List<Amenity>> createMultipleBed(@RequestBody List<CreateAmenityRequest> request) {
        List<Amenity> amenityList = amenityService.createMultipleBed(request);
        return ResponseEntity.ok(amenityList);
    }

    // API để cập nhật thông tin giường
    @PutMapping("/{id}")
    public ResponseEntity<?> updateBed(@PathVariable Long id, @RequestBody UpdateAmenityRequest request) {
        amenityService.updateBed(id, request);
        return ResponseEntity.ok(null);
    }

    // API để xóa giường
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBed(@PathVariable Long id) {
        amenityService.deleteBed(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
