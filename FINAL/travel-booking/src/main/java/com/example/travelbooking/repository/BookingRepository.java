package com.example.travelbooking.repository;

import com.example.travelbooking.entity.Booking;
import com.example.travelbooking.entity.Room;
import com.example.travelbooking.model.request.partner.BookingSearchRequestByPartner;
import com.example.travelbooking.model.response.user.BookingResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

}
