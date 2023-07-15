package com.example.travelbooking.repository;


import com.example.travelbooking.entity.OTP;
import com.example.travelbooking.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OTPRepository extends JpaRepository<OTP, Long> {

    Optional<OTP> findByUser_EmailAndConfirmationCode(String email, String code);

}