package com.example.travelbooking.model.request.partner;

import com.example.travelbooking.statics.RoomStatus;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UpdateRoomRequest {
    String name;

    String description;

    Double price;

    int capacity;

    int room_nums;

    Long hotelId;

    List<Integer> imageIds;

    List<Integer> bedIds;

    RoomStatus roomStatus;

    List<Integer> facilityIds;
}
