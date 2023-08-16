package com.example.travelbooking.model.request.partner;

import com.example.travelbooking.statics.BookingStatus;
import jdk.jshell.Snippet;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateBookingStatusRequest {
    BookingStatus status;
}
