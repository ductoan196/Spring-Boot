package com.example.travelbooking.model.request.user;

import com.example.travelbooking.entity.RoomReservation;
import com.example.travelbooking.entity.User;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Future;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CreateBookingRequest {
    Long userId;

    String customerName;

    String customerPhone;

    Long roomId;

    @Future(message = "Start date must be in the future")
    LocalDate startDate;

    @Future(message = "Start date must be in the future")
    LocalDate endDate;

    Double totalAmount;

    Integer roomNums;

    @AssertTrue(message = "End date must be after start date")
    public boolean isEndDateAfterStartDate() {
        if (startDate == null || endDate == null) {
            return true; // Allow null values or handle separately
        }
        return !endDate.isBefore(startDate);
    }
}
