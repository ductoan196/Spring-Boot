package com.example.travelbooking.repository;

import com.example.travelbooking.entity.Hotel;
import com.example.travelbooking.entity.User;
import com.example.travelbooking.model.request.admin.HotelSearchRequest;
import com.example.travelbooking.model.response.admin.HotelSearchResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
    Optional<Hotel> findByEmail(String email);
}
