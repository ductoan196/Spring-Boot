package com.example.travelbooking.controller.partner.api;

import com.example.travelbooking.model.request.partner.UpdateBookingStatusRequest;
import com.example.travelbooking.model.response.user.BookingResponse;
import com.example.travelbooking.service.user.BookingService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/v1/partner/bookings")
@AllArgsConstructor

public class BookingPartnerController {
    BookingService bookingService;

    @PutMapping("/{bookingId}")
    public ResponseEntity<?> updateBookingStatus(@PathVariable Long bookingId, @RequestBody UpdateBookingStatusRequest request) {
        BookingResponse bookingResponse = bookingService.updateBookingStatus( bookingId, request);

        return ResponseEntity.ok(bookingResponse);
    }
}
