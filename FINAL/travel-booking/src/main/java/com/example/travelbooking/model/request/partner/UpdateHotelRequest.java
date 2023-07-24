package com.example.travelbooking.model.request.partner;

import com.example.travelbooking.entity.Location;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UpdateHotelRequest {

    String name;

    String email;

    String phone;

    String avatar;

    String address;
}
