package com.example.travelbooking.model.request.partner;

import com.example.travelbooking.model.request.BaseSearchRequest;
import lombok.Data;

@Data
public class BookingSearchRequestByPartner extends BaseSearchRequest {
    Long bookingId;
    String customerName;
    String customerPhone;
}
