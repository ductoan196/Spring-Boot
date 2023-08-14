package com.example.travelbooking.model.response.user;

import com.example.travelbooking.entity.RoomReservation;
import com.example.travelbooking.entity.User;
import com.example.travelbooking.statics.BookingStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class BookingSearchResponse {
    Long id;

    Double totalAmount;

    User user;

    String customerName;

    String customerPhone;

    RoomReservation roomReservation;

    Long hotelId;

    BookingStatus status;
}
