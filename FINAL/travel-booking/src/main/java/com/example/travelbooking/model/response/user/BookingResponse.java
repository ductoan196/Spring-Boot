package com.example.travelbooking.model.response.user;

import com.example.travelbooking.entity.RoomReservation;
import com.example.travelbooking.entity.User;
import com.example.travelbooking.statics.BookingStatus;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookingResponse {
    Long id;

    Double totalAmount;

    String customerName;

    String customerPhone;

    Long roomId;

    Long hotelId;

    String roomName;

    Integer roomNums;

    LocalDate startDate;

    LocalDate endDate;

    LocalDateTime createdDateTime;

    BookingStatus status;
}
