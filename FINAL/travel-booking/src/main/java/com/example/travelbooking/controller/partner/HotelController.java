package com.example.travelbooking.controller.partner;

import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.entity.Hotel;
import com.example.travelbooking.model.request.partner.CreateRoomRequest;
import com.example.travelbooking.model.request.partner.UpdateRoomRequest;
import com.example.travelbooking.model.response.partner.RoomResponse;
import com.example.travelbooking.service.partner.AmenityService;
import com.example.travelbooking.service.partner.FacilityService;
import com.example.travelbooking.service.partner.HotelService;
import com.example.travelbooking.statics.BedType;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;


@Controller
@RequestMapping("/api/v1/partners")
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class HotelController {

    HotelService hotelService;
    FacilityService facilityService;
    AmenityService amenityService;

    // Cập nhật thông tin khách sạn
    @PutMapping
    public ResponseEntity<?> updateHotel(@RequestBody Hotel hotel) {
        try {
            Hotel updatedHotel = hotelService.updateHotelForPartner(hotel);
            if (updatedHotel != null) {
                return ResponseEntity.ok(updatedHotel);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update hotel");
        }
    }

    // Lấy danh sách phòng khách sạn
    @GetMapping("/rooms")
    public String getRooms(Model model) {
            List<RoomResponse> rooms = hotelService.getRoomList();
            model.addAttribute("rooms", rooms);
            return "management/partner/room-list";
    }

    //Chuyển đến trang tạo phòng
    @GetMapping("/rooms/create-room")
    public String createNewRoomForm(Model model) {
        List<BedType> bedTypes = Arrays.asList(BedType.values());
        List<Facility> facilities = facilityService.getAllFacility();

        model.addAttribute("bedTypes", bedTypes);
        model.addAttribute("facilities", facilities);
        model.addAttribute("createRoomRequest", new CreateRoomRequest());
        return "management/partner/add-room";
    }

    // Tạo mới phòng khách sạn
    @PostMapping("/rooms")
    public ResponseEntity<?> createRoom(@RequestBody CreateRoomRequest createRoomRequest) {

        hotelService.createRoom(createRoomRequest);
        return new ResponseEntity<>(null, HttpStatus.CREATED);

    }

    // Chuyển đến trang sửa phòng
    @GetMapping("/edit-room/{roomId}")
    public String editRoomForm(@PathVariable Long roomId, Model model) {
        RoomResponse room = hotelService.getRoomDetail(roomId);
        List<BedType> bedTypes = Arrays.asList(BedType.values());
        List<Facility> facilities = facilityService.getAllFacility();

        model.addAttribute("room", room);
        model.addAttribute("bedTypes", bedTypes);
        model.addAttribute("facilities", facilities);
        model.addAttribute("editRoomRequest", new UpdateRoomRequest());
        return "management/partner/edit-room";
    }

    // Sửa thông tin phòng
    @PutMapping("/{roomId}")
    public ResponseEntity<?> editRoom(@PathVariable Long roomId, @ModelAttribute UpdateRoomRequest updateRoomRequest) {
        hotelService.updateRoom(roomId, updateRoomRequest);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    // Xóa phòng
    @DeleteMapping("/{roomId}")
    public ResponseEntity<?> deleteRoom(@PathVariable Long roomId) {
        hotelService.deleteRoom(roomId);
        return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }

}
