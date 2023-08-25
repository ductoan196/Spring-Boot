package com.example.travelbooking.model.request.user;

import com.example.travelbooking.model.request.BaseSearchRequest;
import lombok.Data;

import java.time.LocalDate;

@Data
public class BookingSearchRequestByUser extends BaseSearchRequest {
    String hotelName;
    LocalDate startDate;
    LocalDate endDate;
}
