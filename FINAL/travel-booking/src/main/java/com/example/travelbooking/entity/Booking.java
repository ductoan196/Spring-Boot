package com.example.travelbooking.entity;

import com.example.travelbooking.statics.BookingStatus;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "bookings")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Booking extends BaseEntity {

    Double totalAmount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    User user;

    String customerName;

    String customerPhone;

    @OneToOne
    @JoinColumn(name = "room_reservation_id")
    RoomReservation roomReservation;

    Long hotelId;

    @Enumerated(EnumType.STRING)
    BookingStatus status;
}
