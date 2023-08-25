package com.example.travelbooking.model.request.user;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.FutureOrPresent;
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

    @FutureOrPresent(message = "Checkin date must be present or in the future")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    LocalDate startDate;

    @FutureOrPresent(message = "Checkin date must be present or in the future")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    LocalDate endDate;

    Double totalAmount;

    Integer roomNums;

}
