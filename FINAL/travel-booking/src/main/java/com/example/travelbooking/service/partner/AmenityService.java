package com.example.travelbooking.service.partner;

import com.example.travelbooking.entity.Amenity;
import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.model.request.partner.CreateAmenityRequest;
import com.example.travelbooking.model.request.partner.UpdateAmenityRequest;
import com.example.travelbooking.repository.AmenityRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class AmenityService {
    AmenityRepository amenityRepository;
    ObjectMapper objectMapper;

    public List<Amenity> getAllBed() {
        return amenityRepository.findAll();
    }

    public List<Amenity> createMultipleBed(List<CreateAmenityRequest> requestList) {
        List<Amenity> amenityList = new ArrayList<>();

        for (CreateAmenityRequest request: requestList) {
            Amenity amenity = new Amenity();
            amenity.setBedType(request.getBedType());
            amenity.setQuantity(request.getQuantity());
            amenityList.add(amenity);
        }

        return amenityList;
    }

    public void updateBed(Long id, UpdateAmenityRequest request) {
        Amenity amenity = amenityRepository.findById(id).orElseThrow(() -> new NotFoundException("Không tìm thấy giường"));

        amenity.setQuantity(request.getQuantity());
        amenity.setBedType(request.getBedType());


    }

    public void deleteBed(Long id) {
        amenityRepository.deleteById(id);
    }



}
