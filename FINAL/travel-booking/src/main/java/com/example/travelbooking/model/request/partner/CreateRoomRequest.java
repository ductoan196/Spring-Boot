package com.example.travelbooking.model.request.partner;

import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.statics.RoomStatus;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.web.multipart.MultipartFile;

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

    Integer capacity;

    Integer room_nums;

    String hotelEmail;

    List<MultipartFile> images;

    RoomStatus roomStatus;

    List<String> facilities;

    List<CreateBedRequest> beds;
}
