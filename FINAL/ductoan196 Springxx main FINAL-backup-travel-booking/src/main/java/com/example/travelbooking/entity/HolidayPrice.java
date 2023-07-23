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
@Table(name = "holiday_price")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class HolidayPrice extends BaseEntity {

    @Column(name = "holiday_date")
    LocalDate holidayDate;

    @Column(name = "price")
    Double price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    Room room;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tour_id")
    Tour tour;
}
