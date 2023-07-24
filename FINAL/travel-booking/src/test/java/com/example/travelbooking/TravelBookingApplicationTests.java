package com.example.travelbooking;

import com.example.travelbooking.entity.*;
import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.repository.FacilityRepository;
import com.example.travelbooking.repository.HotelRepository;
import com.example.travelbooking.repository.LocationRepository;
import com.example.travelbooking.repository.OTPRepository;
import com.example.travelbooking.security.SecurityUtils;
import com.example.travelbooking.service.UserService;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@SpringBootTest

class TravelBookingApplicationTests {

    @Autowired
    UserService userService;

    @Autowired
    OTPRepository otpRepository;

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    FacilityRepository facilityRepository;

    @Autowired
    HotelRepository hotelRepository;


    @Test
    void createHotel1() {
    }

    @Test
    void createLocation() {
        List<Location> cities = new ArrayList<>();

        locationRepository.saveAll(cities);
    }

    @Test
    void getUserLogin() {

        String userLogin = SecurityUtils.getCurrentUserLogin().orElseThrow(() -> new NotFoundException("Không tìm thấy location trong danh sách"));
        System.out.println(userLogin);
    }

}
