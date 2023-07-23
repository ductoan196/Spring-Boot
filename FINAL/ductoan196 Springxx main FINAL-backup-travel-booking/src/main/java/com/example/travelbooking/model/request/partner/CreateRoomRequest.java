package com.example.travelbooking.model.request.partner;

import com.example.travelbooking.entity.Bed;
import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.entity.Hotel;
import com.example.travelbooking.entity.Image;
import com.example.travelbooking.statics.RoomStatus;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CreateRoomRequest {
    String name;

    String description;

    Double price;

    int capacity;

    int room_nums;

    Hotel hotel;

    List<Image> images;

    List<Bed> bedList;

    RoomStatus roomStatus;

    List<Facility> facilities;
}
