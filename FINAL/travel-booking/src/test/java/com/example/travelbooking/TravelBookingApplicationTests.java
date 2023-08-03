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

//    @Test
//    void createFacility() {
//        List<Facility> facilities = new ArrayList<>();
//        facilities.add(new Facility("TV"));
//        facilities.add(new Facility("Air conditioning"));
//        facilities.add(new Facility("Wi-Fi"));
//        facilities.add(new Facility("Mini-bar"));
//        facilities.add(new Facility("Hairdryer"));
//        facilities.add(new Facility("Safe box"));
//        facilities.add(new Facility("Telephone"));
//        facilities.add(new Facility("Coffee/tea maker"));
//        facilities.add(new Facility("Desk"));
//        facilities.add(new Facility("Iron and ironing board"));
//        facilities.add(new Facility("Bathrobe"));
//        facilities.add(new Facility("Slippers"));
//        facilities.add(new Facility("Toiletries"));
//        facilities.add(new Facility("Shower"));
//        facilities.add(new Facility("Bathtub"));
//        facilities.add(new Facility("Towels"));
//        facilities.add(new Facility("Sofa"));
//        facilities.add(new Facility("Wardrobe/closet"));
//        facilities.add(new Facility("Dining area"));
//        facilities.add(new Facility("Refrigerator"));
//        facilities.add(new Facility("Microwave"));
//        facilities.add(new Facility("Electric kettle"));
//        facilities.add(new Facility("Oven"));
//        facilities.add(new Facility("Dishwasher"));
//        facilities.add(new Facility("Washing machine"));
//        facilities.add(new Facility("Room service"));
//        facilities.add(new Facility("Luggage storage"));
//        facilities.add(new Facility("Elevator"));
//        facilities.add(new Facility("Swimming pool"));
//        facilities.add(new Facility("Fitness center"));
//
//        // Lưu danh sách facilities vào database bằng JpaRepository
//        facilityRepository.saveAll(facilities);
//
//    }

}
