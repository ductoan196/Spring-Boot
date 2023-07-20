package com.example.travelbooking;

import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.entity.Location;
import com.example.travelbooking.entity.OTP;
import com.example.travelbooking.entity.User;
import com.example.travelbooking.repository.FacilityRepository;
import com.example.travelbooking.repository.LocationRepository;
import com.example.travelbooking.repository.OTPRepository;
import com.example.travelbooking.service.UserService;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

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

    @Test
    void createFacility() {
        List<Facility> facilities = new ArrayList<>();

        facilities.add(Facility.builder().name("WiFi").build());
        facilities.add(Facility.builder().name("Television").build());
        facilities.add(Facility.builder().name("Air Conditioning").build());
        facilities.add(Facility.builder().name("Mini Bar").build());
        facilities.add(Facility.builder().name("Safe Deposit Box").build());
        facilities.add(Facility.builder().name("Room Service").build());
        facilities.add(Facility.builder().name("Fitness Center").build());
        facilities.add(Facility.builder().name("Swimming Pool").build());
        facilities.add(Facility.builder().name("Spa").build());
        facilities.add(Facility.builder().name("Restaurant").build());
        facilities.add(Facility.builder().name("Bar/Lounge").build());
        facilities.add(Facility.builder().name("Conference/Meeting Rooms").build());
        facilities.add(Facility.builder().name("Business Center").build());
        facilities.add(Facility.builder().name("Parking").build());
        facilities.add(Facility.builder().name("Airport Shuttle").build());
        facilities.add(Facility.builder().name("Laundry Service").build());
        facilities.add(Facility.builder().name("Gym").build());
        facilities.add(Facility.builder().name("Concierge").build());
        facilities.add(Facility.builder().name("Pet-friendly").build());
        facilities.add(Facility.builder().name("24-Hour Front Desk").build());
        facilities.add(Facility.builder().name("Elevator").build());
        facilities.add(Facility.builder().name("Non-Smoking Rooms").build());
        facilities.add(Facility.builder().name("Suites").build());
        facilities.add(Facility.builder().name("Beachfront").build());
        facilities.add(Facility.builder().name("Sea View").build());
        facilities.add(Facility.builder().name("Garden").build());
        facilities.add(Facility.builder().name("Terrace").build());
        facilities.add(Facility.builder().name("Balcony").build());
        facilities.add(Facility.builder().name("Free Breakfast").build());
        facilities.add(Facility.builder().name("Free Parking").build());
        facilities.add(Facility.builder().name("Private Beach Area").build());
        facilities.add(Facility.builder().name("Hiking Trails").build());

        facilityRepository.saveAll(facilities);
    }




}
