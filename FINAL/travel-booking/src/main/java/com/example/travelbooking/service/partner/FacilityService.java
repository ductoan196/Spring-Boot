package com.example.travelbooking.service.partner;

import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.repository.FacilityRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FacilityService {
    FacilityRepository facilityRepository;


    public List<Facility> getAllFacility() {
        return facilityRepository.findAll();
    }

    public Page<Facility> getAllFacility(Integer page, Integer pageSize) {
        Pageable pageRequest = PageRequest.of(page - 1, pageSize);
        return facilityRepository.findAll(pageRequest);
    }
}
