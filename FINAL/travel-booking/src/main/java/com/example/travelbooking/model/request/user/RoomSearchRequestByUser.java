package com.example.travelbooking.model.request.user;

import com.example.travelbooking.model.request.BaseSearchRequest;
import com.example.travelbooking.statics.RoomStatus;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Future;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.Min;
import java.time.LocalDate;

@Data
public class RoomSearchRequestByUser extends BaseSearchRequest {

    String location;

    @FutureOrPresent(message = "Checkin date must be present or in the future")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    LocalDate checkinDate;

    @Future(message = "Checkout date must be in the future")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    LocalDate checkoutDate;

    @Min(value = 1, message = "Number of guests must be at least 1")
    Integer numberOfGuests;

}
