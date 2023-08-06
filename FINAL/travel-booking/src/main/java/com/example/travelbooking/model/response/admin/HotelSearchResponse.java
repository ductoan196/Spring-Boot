package com.example.travelbooking.model.response.admin;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class HotelSearchResponse {
    Long id;

    String name;

    String email;

    String phone;

    String imageUrl;

    String province;

    String district;

    String ward;

    String street;

    //Full address (street + ward + district + province)
    String address;
}
