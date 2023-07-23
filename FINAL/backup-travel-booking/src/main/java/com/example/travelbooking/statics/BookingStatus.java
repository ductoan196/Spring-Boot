package com.example.travelbooking.statics;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum BookingStatus {
    CONFIRMED("Confirmed"),
    PENDING("Pending"),
    CANCELLED("Cancelled");

    private String name;
}
