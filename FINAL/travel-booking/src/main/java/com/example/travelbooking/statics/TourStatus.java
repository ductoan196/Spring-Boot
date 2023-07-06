package com.example.travelbooking.statics;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum TourStatus {
    AVAILABLE("Available"),
    BOOKED("Booked"),
    UNAVAILABLE("Unavailable");

    public String name;
}
