package com.example.travelbooking.model.request.partner;

import com.example.travelbooking.statics.RoomStatus;
import lombok.Data;

@Data
public class RoomSearchRequest extends BaseSearchRequest{

    Long id;

    String name;

    String description;

    Double price;

    Integer capacity;

    Integer room_nums;

    RoomStatus roomStatus;


}
