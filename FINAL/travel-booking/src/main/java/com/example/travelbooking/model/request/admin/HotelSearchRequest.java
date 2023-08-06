package com.example.travelbooking.model.request.admin;

import com.example.travelbooking.model.request.BaseSearchRequest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HotelSearchRequest extends BaseSearchRequest {
    Long id;

    String name;

    String email;

    String phone;

    //Full address (street + ward + district + province)
    String address;
}
