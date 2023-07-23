package com.example.travelbooking.service.partner;

import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.repository.FacilityRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FacilityService {
    FacilityRepository facilityRepository;

    public List<Facility> getAllFacility() {
        return facilityRepository.findAll();
    }
}
