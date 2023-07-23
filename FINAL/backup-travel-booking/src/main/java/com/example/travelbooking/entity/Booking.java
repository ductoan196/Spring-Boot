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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    User user;

    @Column(name = "check_in_date")
    LocalDate checkInDate;

    @Column(name = "check_out_date")
    LocalDate checkOutDate;

    @Enumerated(EnumType.STRING)
    BookingStatus status;
}
