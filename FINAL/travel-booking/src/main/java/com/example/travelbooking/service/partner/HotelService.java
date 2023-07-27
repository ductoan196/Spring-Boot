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
import com.example.travelbooking.service.FileService;
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
import org.springframework.web.multipart.MultipartFile;

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
    FileService fileService;


    public List<RoomResponse> getRoomList() {
        return roomRepository.findAll()
                .stream()
                .map(room -> objectMapper.convertValue(room, RoomResponse.class))
                .collect(Collectors.toList());
    }


    public Hotel updateHotel(UpdateHotelRequest request) {
        Hotel hotel = hotelRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new NotFoundException("Không tìm thấy hotel trong danh sách"));


        hotel.setName(request.getName());
        hotel.setPhone(request.getPhone());
        hotel.setAddress(request.getAddress());
        if (request.getAvatar() != null && !request.getAvatar().isEmpty()) {
            String imgUrl = fileService.upload(request.getAvatar());
            hotel.setImageUrl(imgUrl);
        }

        return hotelRepository.save(hotel);
    }

    public Hotel getHotelByEmail(String email) {
        return hotelRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy hotel trong danh sách"));
    }

    public Hotel updateHotelwithAvatar(MultipartFile file, String name, String phone, String address, String email) {

        Hotel hotel = hotelRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy hotel trong danh sách"));

        if (file != null && !file.isEmpty()) {
            String imgUrl = fileService.upload(file);
            hotel.setImageUrl(imgUrl);
        }
        hotel.setName(name);
        hotel.setPhone(phone);
        hotel.setAddress(address);

        return hotelRepository.save(hotel);
    }
}
