package com.example.travelbooking.service.partner;

import com.example.travelbooking.repository.RoomRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RoomService {
    RoomRepository roomRepository;
}
