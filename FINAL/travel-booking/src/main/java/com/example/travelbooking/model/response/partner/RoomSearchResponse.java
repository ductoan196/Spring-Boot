package com.example.travelbooking.model.response.partner;

import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.statics.RoomStatus;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RoomSearchResponse {
    Long id;

    String name;

    String description;

    Double price;

    Integer capacity;

    Integer room_nums;

    RoomStatus roomStatus;

    List<Facility> facilities;
}
