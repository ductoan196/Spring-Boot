package com.example.travelbooking.repository;

import com.example.travelbooking.entity.RoomAvailability;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface RoomAvailabilityRepository extends JpaRepository<RoomAvailability,Long> {
    Optional<RoomAvailability> findByHotelIdAndRoomIdAndDate(Long hotelId, Long roomId, LocalDate date);

    List<RoomAvailability> findByDateBetweenAndAvailableRooms(LocalDate startDate, LocalDate endDate, Integer availableRooms);
}
