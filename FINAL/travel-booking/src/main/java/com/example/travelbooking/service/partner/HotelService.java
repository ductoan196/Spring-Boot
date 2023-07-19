package com.example.travelbooking.service.partner;

import com.example.travelbooking.entity.Hotel;
import com.example.travelbooking.entity.Room;
import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.exception.UserNotFoundException;
import com.example.travelbooking.model.request.partner.CreateRoomRequest;
import com.example.travelbooking.model.request.partner.UpdateRoomRequest;
import com.example.travelbooking.model.response.partner.RoomResponse;
import com.example.travelbooking.repository.RoomRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class HotelService {

    RoomRepository roomRepository;
    ObjectMapper objectMapper;

    public Hotel getHotelForPartner() {
        return null;
    }

    public Hotel updateHotelForPartner(Hotel hotel) {
        return null;
    }

    public List<RoomResponse> getRoomList() {
        return roomRepository.findAll()
                .stream()
                .map(room -> objectMapper.convertValue(room, RoomResponse.class))
                .collect(Collectors.toList());
    }

    public RoomResponse getRoomDetail(Long roomId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy room trong danh sách"));
        return objectMapper.convertValue(room, RoomResponse.class);
    }

    public void createRoom(CreateRoomRequest createRoomRequest) {
        Room room = objectMapper.convertValue(createRoomRequest, Room.class);
        roomRepository.save(room);
    }


    public void updateRoom(Long roomId, UpdateRoomRequest updateRoomRequest) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy room trong danh sách"));


    }
}
