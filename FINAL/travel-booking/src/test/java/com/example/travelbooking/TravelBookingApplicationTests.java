package com.example.travelbooking;

import com.example.travelbooking.entity.*;
import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.repository.FacilityRepository;
import com.example.travelbooking.repository.HotelRepository;
import com.example.travelbooking.repository.LocationRepository;
import com.example.travelbooking.repository.OTPRepository;
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
        Location location = locationRepository.findById(67L)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy location trong danh sách"));

        Hotel hotel = Hotel.builder()
                .location(location)
                .name("Hoàng Gia")
                .build();

        hotelRepository.save(hotel);
        System.out.println(hotel);
    }

    @Test
    void createLocation() {
        List<Location> cities = new ArrayList<>();

        locationRepository.saveAll(cities);
    }

}
