package com.example.travelbooking.service.partner;

import com.example.travelbooking.entity.Bed;
import com.example.travelbooking.model.request.partner.BedRequestDTO;
import com.example.travelbooking.entity.Room;
import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.model.request.partner.CreateBedRequest;
import com.example.travelbooking.repository.BedRepository;
import com.example.travelbooking.repository.RoomRepository;
import com.example.travelbooking.statics.BedType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class BedService {

    BedRepository bedRepository;
    RoomRepository roomRepository;


    public void createBed(BedRequestDTO bedRequestDTO) {
        Room room = roomRepository.findById(bedRequestDTO.getRoomId())
                .orElseThrow(() -> new NotFoundException("Không tìm thấy room trong danh sách"));

        for (CreateBedRequest request : bedRequestDTO.getBeds()) {
            Bed bed = Bed.builder()
                    .room(room)
                    .quantity(request.getQuantity())
                    .bedType(findBedTypeFromString(request.getBedType()))
                    .build();

            bedRepository.save(bed);
        }
    }

    private BedType findBedTypeFromString(String bedTypeString) {
        for (BedType bedType : BedType.values()) {
            if (bedType.name().equalsIgnoreCase(bedTypeString)) {
                return bedType;
            }
        }
        throw new IllegalArgumentException("Invalid bed type: " + bedTypeString);
    }
}
