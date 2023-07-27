package com.example.travelbooking.controller.partner;

import com.example.travelbooking.entity.Room;
import com.example.travelbooking.model.request.partner.CreateRoomRequest;
import com.example.travelbooking.service.partner.RoomService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("api/v1/partner/rooms")
@AllArgsConstructor
public class RoomController {

    RoomService roomService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Room> createRoomWithoutBed(@ModelAttribute CreateRoomRequest request) {
        Room room = roomService.createRoom(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(room);
    }

    @PutMapping("{roomId}/bed")
    public ResponseEntity<Room> updateBedforRoom(@RequestBody CreateRoomRequest request) {
        Room room = roomService.createRoom(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(room);
    }
    
}
