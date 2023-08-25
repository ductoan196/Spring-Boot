package com.example.travelbooking.service.user;

import com.example.travelbooking.entity.*;
import com.example.travelbooking.exception.NotEnoughRoomsAvailableException;
import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.model.request.partner.BookingSearchRequestByPartner;
import com.example.travelbooking.model.request.partner.RoomSearchRequest;
import com.example.travelbooking.model.request.partner.UpdateBookingStatusRequest;
import com.example.travelbooking.model.request.user.BookingSearchRequestByUser;
import com.example.travelbooking.model.request.user.CreateBookingRequest;
import com.example.travelbooking.model.response.partner.CommonResponse;
import com.example.travelbooking.model.response.partner.RoomSearchResponse;
import com.example.travelbooking.model.response.user.BookingResponse;
import com.example.travelbooking.repository.*;
import com.example.travelbooking.repository.custom.BookingCustomRepository;
import com.example.travelbooking.statics.BookingStatus;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Transactional
public class BookingService {
    UserRepository userRepository;
    RoomRepository roomRepository;
    BookingRepository bookingRepository;
    RoomReservationRepository roomReservationRepository;
    HotelRepository hotelRepository;
    BookingCustomRepository bookingCustomRepository;
    RoomAvailabilityRepository roomAvailabilityRepository;

    public BookingResponse createBooking(CreateBookingRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new NotFoundException("Không tìm thấy user trong hệ thống"));
        Room room = roomRepository.findById(request.getRoomId())
                .orElseThrow(() -> new NotFoundException("Không tìm thấy room trong hệ thống"));

        LocalDate startDate = request.getStartDate();
        LocalDate endDate = request.getEndDate();
        Long roomId = request.getRoomId();
        Long hotelId = room.getHotel().getId();
        Integer roomNums = request.getRoomNums();

        RoomReservation roomReservation = RoomReservation.builder()
                .startDate(startDate)
                .endDate(endDate)
                .room(room)
                .roomNums(roomNums)
                .build();
        roomReservationRepository.save(roomReservation);


        List<LocalDate> bookingDates = startDate.datesUntil(endDate).collect(Collectors.toList());
        for (LocalDate bookingDate : bookingDates) {
            Optional<RoomAvailability> optionalRoomAvailability = roomAvailabilityRepository.findByHotelIdAndRoomIdAndDate(hotelId, roomId, bookingDate);

            if (optionalRoomAvailability.isPresent()) {
                RoomAvailability roomAvailability = optionalRoomAvailability.get();

                if (roomAvailability.getAvailableRooms() >= roomNums) {
                    roomAvailability.setAvailableRooms(roomAvailability.getAvailableRooms() - roomNums);
                    roomAvailability.setBookedRooms(roomAvailability.getBookedRooms() + roomNums);
                } else {
                    throw new NotEnoughRoomsAvailableException("Không đủ phòng trống cho ngày đã chọn");
                }
                roomAvailabilityRepository.save(roomAvailability);
            } else {
                // Create a new availability record for the date
                RoomAvailability roomAvailability = new RoomAvailability();
                roomAvailability.setHotelId(hotelId);
                roomAvailability.setRoomId(roomId);
                roomAvailability.setDate(bookingDate);
                roomAvailability.setAvailableRooms(room.getRoom_nums()-roomNums);
                roomAvailability.setBookedRooms(roomNums);
                roomAvailabilityRepository.save(roomAvailability);
            }

        }

        Booking booking = Booking.builder()
                .roomReservation(roomReservation)
                .user(user)
                .customerName(request.getCustomerName())
                .customerPhone(request.getCustomerPhone())
                .totalAmount(request.getTotalAmount())
                .hotelId(room.getHotel().getId())
                .status(BookingStatus.PENDING)
                .build();
        bookingRepository.save(booking);

        return convertBookingToBookingResponse(booking);
    }

    public BookingResponse convertBookingToBookingResponse(Booking booking) {
        BookingResponse bookingResponse = BookingResponse.builder()
                .id(booking.getId())
                .customerName(booking.getCustomerName())
                .customerPhone(booking.getCustomerPhone())
                .roomName(booking.getRoomReservation().getRoom().getName())
                .roomNums(booking.getRoomReservation().getRoomNums())
                .roomId(booking.getRoomReservation().getRoom().getId())
                .startDate(booking.getRoomReservation().getStartDate())
                .endDate(booking.getRoomReservation().getEndDate())
                .status(booking.getStatus())
                .hotelId(booking.getHotelId())
                .totalAmount(booking.getTotalAmount())
                .createdDateTime(booking.getCreatedDateTime())
                .build();

        return bookingResponse;
    }

    public BookingResponse getBookingById(Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy booking trong hệ thống"));
        return convertBookingToBookingResponse(booking);
    }

    public CommonResponse<?> searchBookingByPartner(BookingSearchRequestByPartner request, String currentUserEmail) {
        try {
            Hotel hotel = hotelRepository.findByEmail(currentUserEmail)
                    .orElseThrow(() -> new NotFoundException("Không tìm thấy hotel trong danh sách"));

            List<BookingResponse> bookings = bookingCustomRepository.searchBookings(request, hotel.getId());

            Integer pageIndex = request.getPageIndex();
            Integer pageSize = request.getPageSize();

            int pageNumber = (int) Math.ceil((float) bookings.size() / pageSize);

            PaginationUtils<BookingResponse> paginationUtils = new PaginationUtils<>();
            bookings = paginationUtils.searchData(bookings, pageIndex, pageSize);

            return CommonResponse.builder()
                    .pageNumber(pageNumber)
                    .data(bookings)
                    .build();
        } catch (Exception e) {
            throw new NotFoundException("Page index out of bound");
        }
    }

    public CommonResponse<?> searchBookingByUser(BookingSearchRequestByUser request, String currentUserEmail) {
        try {
            User user = userRepository.findByEmail(currentUserEmail)
                    .orElseThrow(() -> new NotFoundException("Không tìm thấy user trong danh sách"));

            List<BookingResponse> bookings = bookingCustomRepository.searchBookingsByUser(request, user.getId());

            Integer pageIndex = request.getPageIndex();
            Integer pageSize = request.getPageSize();

            int pageNumber = (int) Math.ceil((float) bookings.size() / pageSize);

            PaginationUtils<BookingResponse> paginationUtils = new PaginationUtils<>();
            bookings = paginationUtils.searchData(bookings, pageIndex, pageSize);

            return CommonResponse.builder()
                    .pageNumber(pageNumber)
                    .data(bookings)
                    .build();
        } catch (Exception e) {
            throw new NotFoundException("Page index out of bound");
        }
    }

    public BookingResponse updateBookingStatus(Long bookingId, UpdateBookingStatusRequest request) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy booking trong hệ thống"));
        booking.setStatus(request.getStatus());

        bookingRepository.save(booking);
        return convertBookingToBookingResponse(booking);
    }

    public BookingResponse findById(Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy booking trong hệ thống"));

        return convertBookingToBookingResponse(booking);
    }
}
