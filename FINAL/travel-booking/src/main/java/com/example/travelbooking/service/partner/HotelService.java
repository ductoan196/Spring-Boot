package com.example.travelbooking.service.partner;

import com.example.travelbooking.entity.Hotel;
import com.example.travelbooking.entity.Room;
import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.exception.UserNotFoundException;
import com.example.travelbooking.model.request.partner.CreateRoomRequest;
import com.example.travelbooking.model.request.partner.UpdateHotelRequest;
import com.example.travelbooking.model.request.partner.UpdateRoomRequest;
import com.example.travelbooking.model.response.partner.RoomResponse;
import com.example.travelbooking.repository.HotelRepository;
import com.example.travelbooking.repository.RoomRepository;
import com.example.travelbooking.security.SecurityUtils;
import com.example.travelbooking.service.UserService;
import com.example.travelbooking.statics.Gender;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class HotelService {

    HotelRepository hotelRepository;
    RoomRepository roomRepository;
    ObjectMapper objectMapper;

    UserService userService;


    public List<RoomResponse> getRoomList() {
        return roomRepository.findAll()
                .stream()
                .map(room -> objectMapper.convertValue(room, RoomResponse.class))
                .collect(Collectors.toList());
    }


    public Hotel updateHotel(UpdateHotelRequest updateHotelRequest) {
        Hotel hotel = hotelRepository.findByEmail(updateHotelRequest.getEmail())
                .orElseThrow(() -> new NotFoundException("Không tìm thấy hotel trong danh sách"));
        hotel.setName(updateHotelRequest.getName());
        hotel.setImageUrl(updateHotelRequest.getImageUrl());
        hotel.setPhone(updateHotelRequest.getPhone());
        hotel.setAddress(updateHotelRequest.getAddress());

        return hotelRepository.save(hotel);
    }

    public Hotel getHotelByEmail(String email) {
        return hotelRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy hotel trong danh sách"));
    }
}
