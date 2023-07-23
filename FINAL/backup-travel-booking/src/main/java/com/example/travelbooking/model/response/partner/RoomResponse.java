package com.example.travelbooking.model.response.partner;

import lombok.*;
import lombok.experimental.FieldDefaults;

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
}
