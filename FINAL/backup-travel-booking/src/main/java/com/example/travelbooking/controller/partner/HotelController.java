package com.example.travelbooking.controller.partner;

import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.entity.Hotel;
import com.example.travelbooking.model.request.partner.CreateRoomRequest;
import com.example.travelbooking.model.request.partner.UpdateRoomRequest;
import com.example.travelbooking.model.response.partner.RoomResponse;
import com.example.travelbooking.service.partner.HotelService;
import com.example.travelbooking.statics.BedType;
import com.example.travelbooking.statics.RoomStatus;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;


@Controller
@RequestMapping("/api/v1/partners")
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class HotelController {

    HotelService hotelService;
//
//    //Chuyển đến trang thông tin hotel
//    @GetMapping("/partner/hotel-info")
//    public String forwardToHotelForm(Model model) {
//
//        return "management/partner/hotel-information";
//    }
//
//
//    // Cập nhật thông tin khách sạn
//    @PutMapping
//    public ResponseEntity<?> updateHotel(@RequestBody Hotel hotel) {
//        try {
//            Hotel updatedHotel = hotelService.updateHotelInfo(hotel);
//            if (updatedHotel != null) {
//                return ResponseEntity.ok(updatedHotel);
//            } else {
//                return ResponseEntity.notFound().build();
//            }
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update hotel");
//        }
//    }
//
//    // Lấy danh sách phòng khách sạn
//    @GetMapping("/rooms")
//    public ResponseEntity<?> getRooms(Model model) {
//        try {
//            List<RoomResponse> rooms = hotelService.getRoomList();
//            model.addAttribute(rooms);
//            return ResponseEntity.ok(rooms);
//
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error");
//        }
//    }
//
//    // Lấy thông tin chi tiết về một phòng
//    @GetMapping("/rooms/{roomId}")
//    public ResponseEntity<?> getRoom(@PathVariable Long roomId, Model model) {
//        try {
//            RoomResponse room = hotelService.getRoomDetail(roomId);
//            if (room != null) {
//                model.addAttribute(room);
//                return ResponseEntity.ok(room);
//            } else {
//                return ResponseEntity.notFound().build();
//            }
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to fetch room details");
//        }
//    }
//
//    //Form tạo mới
//    @GetMapping("/add-room")
//    public String forwardtoCreateForm(Model model) {
//        model.addAttribute("roomStatusList", RoomStatus.values());
//        return "/management/partner/add-room";
//    }
//
//    // Tạo mới phòng khách sạn
//    @PostMapping
//    public ResponseEntity<?> createRoom(@RequestBody CreateRoomRequest createRoomRequest) {
//
//        hotelService.createRoom(createRoomRequest);
//        return new ResponseEntity<>(null, HttpStatus.CREATED);
//
//    }
//
//    // Cập nhật thông tin phòng khách sạn
//    @PutMapping("/{roomId}")
//    public ResponseEntity<?> updateRoom(@PathVariable Long roomId, @RequestBody UpdateRoomRequest updateRoomRequest) {
//
//        hotelService.updateRoom(roomId, updateRoomRequest);
//        return ResponseEntity.ok("Update succesfull");
//
//    }

}