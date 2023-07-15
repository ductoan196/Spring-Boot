package com.example.travelbooking;

import com.example.travelbooking.entity.OTP;
import com.example.travelbooking.entity.User;
import com.example.travelbooking.repository.OTPRepository;
import com.example.travelbooking.service.UserService;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest

class TravelBookingApplicationTests {

    @Autowired
    UserService userService;

    @Autowired
    OTPRepository otpRepository;
    @Test
    void getOTP() {

        Optional<OTP> otpOptional = otpRepository.findByUser_EmailAndConfirmationCode("tata.toan1996@gmail.com", "977708");

        if (otpOptional.isPresent()) {
            System.out.println("Có tồn tại OTP");
        } else {
            System.out.println("Không tìm thấy OTP");
        }
    }




}
