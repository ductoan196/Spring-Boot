package com.example.travelbooking.repository.custom;

import com.example.travelbooking.entity.Booking;
import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.entity.RoomReservation;
import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.model.request.admin.HotelSearchRequest;
import com.example.travelbooking.model.request.partner.BookingSearchRequestByPartner;
import com.example.travelbooking.model.request.user.BookingSearchRequestByUser;
import com.example.travelbooking.model.response.admin.HotelSearchResponse;
import com.example.travelbooking.model.response.partner.RoomSearchResponse;
import com.example.travelbooking.model.response.user.BookingResponse;
import com.example.travelbooking.model.response.user.BookingSearchResponse;
import com.example.travelbooking.repository.BaseRepository;
import com.example.travelbooking.repository.RoomReservationRepository;
import com.example.travelbooking.statics.BookingStatus;
import com.example.travelbooking.statics.RoomStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@Data
@AllArgsConstructor
public class BookingCustomRepository extends BaseRepository {
    RoomReservationRepository roomReservationRepository;

    public List<BookingResponse> searchBookings(BookingSearchRequestByPartner request, Long hotelId) {
        String sql = "SELECT * " +
                "FROM bookings b " +
                "WHERE 1 = 1";  // WHERE 1 = 1 added for flexibility in building the query dynamically

        Map<String, Object> parameter = new HashMap<>();
        if (hotelId != null) {
            sql += " AND b.hotel_id = :hotelId";
            parameter.put("hotelId", hotelId);
        }


        return getNamedParameterJdbcTemplate().query(sql, parameter, (resultSet) -> {
            List<BookingResponse> responses = new ArrayList<>();
            Map<Long, BookingResponse> responseMap = new HashMap<>();

            while (resultSet.next()) {
                Long bookingId = resultSet.getLong("id");
                BookingResponse response = responseMap.get(bookingId);
                RoomReservation roomReservation = roomReservationRepository.findById(resultSet.getLong("room_reservation_id"))
                        .orElseThrow(() -> new NotFoundException("Không tìm thấy trong danh sách"));

                if (response == null) {
                    response = new BookingResponse();
                    response.setId(bookingId);
                    response.setTotalAmount(resultSet.getDouble("total_amount"));
                    response.setCustomerName(resultSet.getString("customer_name"));
                    response.setCustomerPhone(resultSet.getString("customer_phone"));
                    response.setStatus(BookingStatus.valueOf(resultSet.getString("status")));
                    response.setRoomName(roomReservation.getRoom().getName());
                    response.setRoomId(roomReservation.getRoom().getId());
                    response.setRoomNums(roomReservation.getRoomNums());
                    response.setCreatedDateTime(roomReservation.getCreatedDateTime());
                    response.setStartDate(roomReservation.getStartDate());
                    response.setEndDate(roomReservation.getEndDate());
                    responses.add(response);
                    responseMap.put(bookingId, response);
                }

            }

            return responses;
        });
    }

    public List<BookingResponse> searchBookingsByUser(BookingSearchRequestByUser request, Long userId) {
        String sql = "SELECT * " +
                "FROM bookings b " +
                "WHERE 1 = 1";  // WHERE 1 = 1 added for flexibility in building the query dynamically

        Map<String, Object> parameter = new HashMap<>();
        if (userId != null) {
            sql += " AND b.user_id = :userId";
            parameter.put("userId", userId);
        }


        return getNamedParameterJdbcTemplate().query(sql, parameter, (resultSet) -> {
            List<BookingResponse> responses = new ArrayList<>();
            Map<Long, BookingResponse> responseMap = new HashMap<>();

            while (resultSet.next()) {
                Long bookingId = resultSet.getLong("id");
                BookingResponse response = responseMap.get(bookingId);
                RoomReservation roomReservation = roomReservationRepository.findById(resultSet.getLong("room_reservation_id"))
                        .orElseThrow(() -> new NotFoundException("Không tìm thấy trong danh sách"));

                if (response == null) {
                    response = new BookingResponse();
                    response.setId(bookingId);
                    response.setTotalAmount(resultSet.getDouble("total_amount"));
                    response.setCustomerName(resultSet.getString("customer_name"));
                    response.setCustomerPhone(resultSet.getString("customer_phone"));
                    response.setStatus(BookingStatus.valueOf(resultSet.getString("status")));
                    response.setRoomName(roomReservation.getRoom().getName());
                    response.setRoomId(roomReservation.getRoom().getId());
                    response.setRoomNums(roomReservation.getRoomNums());
                    response.setCreatedDateTime(roomReservation.getCreatedDateTime());
                    response.setStartDate(roomReservation.getStartDate());
                    response.setEndDate(roomReservation.getEndDate());
                    responses.add(response);
                    responseMap.put(bookingId, response);
                }

            }

            return responses;
        });
    }

}
