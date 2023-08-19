package com.example.travelbooking.entity;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "room_availability")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RoomAvailability extends BaseEntity {
    @Column(name = "hotel_id")
    Long hotelId;

    @Column(name = "room_id")
    Long roomId;

    @Column(name = "date")
    LocalDate date;

    @Column(name = "available_rooms")
    Integer availableRooms;

    @Column(name = "booked_rooms")
    Integer bookedRooms;
}
