package com.example.travelbooking.service.partner;

import com.example.travelbooking.entity.*;
import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.model.request.partner.CreateBedRequest;
import com.example.travelbooking.model.request.partner.CreateRoomRequest;
import com.example.travelbooking.model.request.partner.RoomSearchRequest;
import com.example.travelbooking.model.request.partner.UpdateRoomRequest;
import com.example.travelbooking.model.request.user.AvailableRoomRequestByUser;
import com.example.travelbooking.model.request.user.RoomSearchRequestByUser;
import com.example.travelbooking.model.response.partner.CommonResponse;
import com.example.travelbooking.model.response.partner.RoomResponse;
import com.example.travelbooking.model.response.partner.RoomSearchResponse;
import com.example.travelbooking.repository.*;
import com.example.travelbooking.repository.custom.HotelSearchCustomRepositoryByUser;
import com.example.travelbooking.repository.custom.RoomCustomRepository;
import com.example.travelbooking.service.user.FileService;
import com.example.travelbooking.service.user.PaginationUtils;
import com.example.travelbooking.statics.BedType;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class RoomService {
    RoomRepository roomRepository;
    RoomCustomRepository roomCustomRepository;

    BedRepository bedRepository;
    HotelRepository hotelRepository;
    HotelSearchCustomRepositoryByUser hotelSearchCustomRepositoryByUser;
    FacilityRepository facilityRepository;
    FileService fileService;
    ModelMapper modelMapper;
    RoomAvailabilityRepository roomAvailabilityRepository;


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
            List<RoomSearchResponse> rooms = roomCustomRepository.searchRoomByLocationAndCapacity(request);

            List<RoomAvailability> bookedRooms = roomAvailabilityRepository.findByDateBetweenAndAvailableRooms(request.getCheckin(), request.getCheckout(), 0);

            for (RoomAvailability roomAvailability : bookedRooms) {
                rooms.removeIf(room -> room.getId().equals(roomAvailability.getRoomId()));
            }

            List<Hotel> hotels = new ArrayList<>();
            for (RoomSearchResponse room : rooms) {
                if (!hotels.contains(room.getHotel())) {
                    hotels.add(room.getHotel());
                }
            }

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

    public RoomResponse getRoomById(Long id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy room trong danh sách"));
        return convertToRoomResponse(room);
    }


    public List<RoomResponse> findAvailableRoomByHotelId(Long id, AvailableRoomRequestByUser request) {
        List<Room> rooms = roomRepository.findByHotelId(id);
        List<RoomAvailability> availableRooms = roomAvailabilityRepository.findAvailableRooms(id, request.getCheckin(), request.getCheckout());

        List<RoomResponse> roomResponses = rooms.stream()
                .map(this::convertToRoomResponse)
                .filter(roomResponse -> {
                    if (request.getNumberOfGuests() != null) {
                        return roomResponse.getCapacity() >= request.getNumberOfGuests();
                    }
                    return true;
                })
                .collect(Collectors.toList());

        //Lấy ra số phòng có sẵn nhỏ nhất là số phòng có sẵn chung trong khoảng thời gian
        for (RoomResponse roomResponse : roomResponses) {
            for (RoomAvailability roomAvailability : availableRooms) {
                if (roomResponse.getId().equals(roomAvailability.getRoomId()) && roomAvailability.getAvailableRooms() < roomResponse.getRoom_nums()) {
                    roomResponse.setRoom_nums(roomAvailability.getAvailableRooms());
                }
            }
        }

        return roomResponses;
    }
}
