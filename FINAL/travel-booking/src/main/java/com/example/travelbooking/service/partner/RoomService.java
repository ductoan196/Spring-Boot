package com.example.travelbooking.service.partner;

import com.example.travelbooking.entity.Bed;
import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.entity.Hotel;
import com.example.travelbooking.entity.Room;
import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.model.request.partner.CreateBedRequest;
import com.example.travelbooking.model.request.partner.CreateRoomRequest;
import com.example.travelbooking.model.request.partner.RoomSearchRequest;
import com.example.travelbooking.model.request.partner.UpdateRoomRequest;
import com.example.travelbooking.model.request.user.RoomSearchRequestByUser;
import com.example.travelbooking.model.response.partner.CommonResponse;
import com.example.travelbooking.model.response.partner.RoomResponse;
import com.example.travelbooking.model.response.partner.RoomSearchResponse;
import com.example.travelbooking.repository.BedRepository;
import com.example.travelbooking.repository.FacilityRepository;
import com.example.travelbooking.repository.HotelRepository;
import com.example.travelbooking.repository.RoomRepository;
import com.example.travelbooking.repository.custom.RoomCustomRepository;
import com.example.travelbooking.service.user.FileService;
import com.example.travelbooking.service.user.PaginationUtils;
import com.example.travelbooking.statics.BedType;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class RoomService {
    RoomRepository roomRepository;
    RoomCustomRepository roomCustomRepository;

    BedRepository bedRepository;
    HotelRepository hotelRepository;
    FacilityRepository facilityRepository;
    FileService fileService;
    ModelMapper modelMapper;


    public Room createRoom(CreateRoomRequest request) {

        Room room = new Room();

        room.setName(request.getName());
        room.setDescription(request.getDescription());
        room.setCapacity(request.getCapacity());
        room.setPrice(request.getPrice());
        room.setRoom_nums(request.getRoom_nums());
        room.setRoomStatus(request.getRoomStatus());


        List<Bed> beds = new ArrayList<>();
        for (CreateBedRequest bedRequest : request.getBeds()) {
            Bed bed = Bed.builder()
                    .quantity(bedRequest.getQuantity())
                    .bedType(findBedTypeFromString(bedRequest.getBedType()))
                    .room(room)
                    .build();
            beds.add(bed);
        }

        List<String> imageUrls= fileService.upload(request.getImages());
        room.setImageUrls(imageUrls);

        Hotel hotel = hotelRepository.findByEmail(request.getHotelEmail())
                .orElseThrow(() -> new NotFoundException("Không tìm thấy hotel trong danh sách"));
        room.setHotel(hotel);

        List<Facility> facilities = new ArrayList<>();
        for (String s : request.getFacilities()) {
            Facility facility = facilityRepository.findByName(s)
                    .orElseThrow(() -> new NotFoundException("Không tìm thấy facility trong danh sách"));
            facilities.add(facility);
        }
        room.setFacilities(facilities);

        room = roomRepository.save(room);
        bedRepository.saveAll(beds);
        return room;
    }

    private BedType findBedTypeFromString(String bedTypeString) {
        for (BedType bedType : BedType.values()) {
            if (bedType.name().equalsIgnoreCase(bedTypeString)) {
                return bedType;
            }
        }
        throw new IllegalArgumentException("Invalid bed type: " + bedTypeString);
    }

    public List<RoomResponse> getAllRooms() {
        List<Room> rooms = roomRepository.findAll();

        List<RoomResponse> roomResponses = rooms.stream()
                .map(this::convertToRoomResponse)
                .collect(Collectors.toList());

        return roomResponses;
    }

    private RoomResponse convertToRoomResponse(Room room) {
        RoomResponse roomResponse = new RoomResponse();
        roomResponse.setId(room.getId());
        roomResponse.setName(room.getName());
        roomResponse.setDescription(room.getDescription());
        roomResponse.setPrice(room.getPrice());
        roomResponse.setCapacity(room.getCapacity());
        roomResponse.setRoom_nums(room.getRoom_nums());
        roomResponse.setHotel(room.getHotel());
        roomResponse.setImageUrls(room.getImageUrls());
        roomResponse.setRoomStatus(room.getRoomStatus());
        roomResponse.setFacilities(room.getFacilities());
        return roomResponse;
    }


    public Room updateRoom(Long roomId, UpdateRoomRequest request) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy room trong danh sách"));

        room.setName(request.getName());
        room.setDescription(request.getDescription());
        room.setCapacity(request.getCapacity());
        room.setPrice(request.getPrice());
        room.setRoom_nums(request.getRoom_nums());
        room.setRoomStatus(request.getRoomStatus());

        bedRepository.deleteAllByRoomId(roomId);
        List<Bed> beds = new ArrayList<>();
        for (CreateBedRequest bedRequest : request.getBeds()) {
            Bed bed = Bed.builder()
                    .quantity(bedRequest.getQuantity())
                    .bedType(findBedTypeFromString(bedRequest.getBedType()))
                    .room(room)
                    .build();
            beds.add(bed);
        }

        List<String> imageUrls= fileService.upload(request.getImages());
        room.setImageUrls(imageUrls);

        // Xóa tất cả các facility của phòng đó khỏi cơ sở dữ liệu
        room.getFacilities().clear();
        List<Facility> facilities = new ArrayList<>();
        for (String s : request.getFacilities()) {
            Facility facility = facilityRepository.findByName(s)
                    .orElseThrow(() -> new NotFoundException("Không tìm thấy facility trong danh sách"));
            facilities.add(facility);
        }
        room.setFacilities(facilities);

        room = roomRepository.save(room);
        bedRepository.saveAll(beds);
        return room;
    }

    public void deleteRoom(Long roomId) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy room trong danh sách"));
        room.getFacilities().clear();
        bedRepository.deleteAllByRoomId(roomId);

        roomRepository.deleteById(roomId);
    }

    public CommonResponse searchRoom(RoomSearchRequest request, String currentEmail) {

        try {
            Hotel hotel = hotelRepository.findByEmail(currentEmail)
                    .orElseThrow(() -> new NotFoundException("Không tìm thấy hotel trong danh sách"));

            List<RoomSearchResponse> rooms = roomCustomRepository.searchRoom(request, hotel.getId());
            Integer pageIndex = request.getPageIndex();
            Integer pageSize = request.getPageSize();

            int pageNumber = (int) Math.ceil((float) rooms.size() / pageSize);

            PaginationUtils<RoomSearchResponse> paginationUtils = new PaginationUtils<>();
            rooms = paginationUtils.searchData(rooms, pageIndex, pageSize);

            return CommonResponse.builder()
                    .pageNumber(pageNumber)
                    .data(rooms)
                    .build();
        } catch (Exception e) {
            throw new NotFoundException("Page index out of bound");
        }
    }

    public CommonResponse<?> searchRoomByUser(RoomSearchRequestByUser request) {
        try {
            List<Hotel> hotels = hotelRepository.findAll();

            Integer pageIndex = request.getPageIndex();
            Integer pageSize = request.getPageSize();

            int pageNumber = (int) Math.ceil((float) hotels.size() / pageSize);

            PaginationUtils<Hotel> paginationUtils = new PaginationUtils<>();
            hotels = paginationUtils.searchData(hotels, pageIndex, pageSize);

            return CommonResponse.builder()
                    .pageNumber(pageNumber)
                    .data(hotels)
                    .build();
        } catch (Exception e) {
            throw new NotFoundException("Page index out of bound");
        }
    }

    public List<Room> findByHotelId(Long hotelId) {
        return roomRepository.findByHotelId(hotelId);
    }
}
