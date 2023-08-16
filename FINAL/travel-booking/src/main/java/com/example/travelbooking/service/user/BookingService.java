package com.example.travelbooking.service.user;

import com.example.travelbooking.entity.*;
import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.model.request.partner.BookingSearchRequestByPartner;
import com.example.travelbooking.model.request.partner.RoomSearchRequest;
import com.example.travelbooking.model.request.partner.UpdateBookingStatusRequest;
import com.example.travelbooking.model.request.user.CreateBookingRequest;
import com.example.travelbooking.model.response.partner.CommonResponse;
import com.example.travelbooking.model.response.partner.RoomSearchResponse;
import com.example.travelbooking.model.response.user.BookingResponse;
import com.example.travelbooking.repository.*;
import com.example.travelbooking.repository.custom.BookingCustomRepository;
import com.example.travelbooking.statics.BookingStatus;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class BookingService {
    UserRepository userRepository;
    RoomRepository roomRepository;
    BookingRepository bookingRepository;
    RoomReservationRepository roomReservationRepository;
    HotelRepository hotelRepository;
    BookingCustomRepository bookingCustomRepository;

    public BookingResponse createBooking(CreateBookingRequest request) {

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new NotFoundException("Không tìm thấy user trong hệ thống"));
        Room room = roomRepository.findById(request.getRoomId())
                .orElseThrow(() -> new NotFoundException("Không tìm thấy room trong hệ thống"));

        RoomReservation roomReservation = RoomReservation.builder()
                .startDate(request.getStartDate())
                .endDate(request.getEndDate())
                .room(room)
                .roomNums(request.getRoomNums())
                .build();
        roomReservationRepository.save(roomReservation);

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

    public CommonResponse<?> searchBooking(BookingSearchRequestByPartner request, String currentUserEmail) {
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

    public BookingResponse updateBookingStatus(Long bookingId, UpdateBookingStatusRequest request) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy booking trong hệ thống"));
        booking.setStatus(request.getStatus());

        bookingRepository.save(booking);
        return convertBookingToBookingResponse(booking);
    }
}
