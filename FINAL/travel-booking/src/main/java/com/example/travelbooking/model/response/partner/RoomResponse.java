package com.example.travelbooking.model.response.partner;

import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.entity.Hotel;
import com.example.travelbooking.statics.RoomStatus;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RoomResponse {
    String name;

    String description;

    Double price;

    int capacity;

    int room_nums;

    Hotel hotel;

    List<String> imageUrls;

    RoomStatus roomStatus;

    List<Facility> facilities;
}
