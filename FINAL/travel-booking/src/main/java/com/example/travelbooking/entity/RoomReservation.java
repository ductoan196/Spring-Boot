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
@Table(name = "room_reservations")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RoomReservation extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
     Room room;

    Integer roomNums;

    LocalDate startDate;

    LocalDate endDate;
}
