package com.example.travelbooking.repository.custom;

import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.entity.Hotel;
import com.example.travelbooking.entity.Room;
import com.example.travelbooking.model.request.partner.RoomSearchRequest;
import com.example.travelbooking.model.request.user.RoomSearchRequestByUser;
import com.example.travelbooking.model.response.partner.RoomResponse;
import com.example.travelbooking.model.response.partner.RoomSearchResponse;
import com.example.travelbooking.repository.BaseRepository;
import com.example.travelbooking.statics.RoomStatus;
import lombok.Data;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
//
//@Repository
//@Data
//public class RoomCustomRepository extends BaseRepository {
//    public List<RoomSearchResponse> searchRoom(RoomSearchRequest request) {
//        String sql = "SELECT r.id id, r.name name, r.description description, r.price price, r.capacity capacity, " +
//                "r.room_nums room_nums, r.room_status room_status, " +
//                "f.id AS facility_id, f.name AS facility_name " +
//                "FROM rooms r " +
//                "LEFT JOIN room_facility rf ON r.id = rf.room_id " +
//                "LEFT JOIN facilities f ON rf.facility_id = f.id";
//
//        Map<String, Object> parameter = new HashMap<>();
//
//
//        if (request.getId()!= null){
//            sql += " and r.id = :id";
//            parameter.put("id",request.getId());
//        }
//
//        if (request.getName()!= null&& !request.getName().trim().equals("")){
//            sql += " and lower(r.name) like :name";
//            parameter.put("name", "%" + request.getName().toLowerCase() + "%");
//        }
//
//        if (request.getCapacity() != null){
//            sql += " and r.capacity = :capacity";
//            parameter.put("capacity", request.getCapacity());
//        }
//        if (request.getRoom_nums() != null){
//            sql += " and lower(r.room_nums) = :room_nums";
//            parameter.put("room_nums", request.getRoom_nums());
//        }
//        return getNamedParameterJdbcTemplate().query(sql, parameter, BeanPropertyRowMapper.newInstance(RoomSearchResponse.class));
//    }
//}

@Repository
@Data
public class RoomCustomRepository extends BaseRepository {
    public List<RoomSearchResponse> searchRoom(RoomSearchRequest request, Long hotelId) {
        String sql = "SELECT r.id id, r.name name, r.description description, r.price price, r.capacity capacity, " +
                "r.room_nums room_nums, r.room_status room_status, " +
                "f.id AS facility_id, f.name AS facility_name " +
                "FROM rooms r " +
                "LEFT JOIN room_facility rf ON r.id = rf.room_id " +
                "LEFT JOIN facilities f ON rf.facility_id = f.id " +
                "WHERE 1 = 1";  // WHERE 1 = 1 added for flexibility in building the query dynamically

        Map<String, Object> parameter = new HashMap<>();
        if (hotelId != null) {
            sql += " AND r.hotel_id = :hotelId";
            parameter.put("hotelId", hotelId);
        }
        if (request.getId() != null) {
            sql += " and r.id = :id";
            parameter.put("id", request.getId());
        }

        if (request.getName() != null && !request.getName().trim().equals("")) {
            sql += " and lower(r.name) like :name";
            parameter.put("name", "%" + request.getName().toLowerCase() + "%");
        }

        if (request.getCapacity() != null) {
            sql += " and r.capacity = :capacity";
            parameter.put("capacity", request.getCapacity());
        }
        if (request.getRoom_nums() != null) {
            sql += " and lower(r.room_nums) = :room_nums";
            parameter.put("room_nums", request.getRoom_nums());
        }

        return getNamedParameterJdbcTemplate().query(sql, parameter, (resultSet) -> {
            List<RoomSearchResponse> responses = new ArrayList<>();
            Map<Long, RoomSearchResponse> responseMap = new HashMap<>();

            while (resultSet.next()) {
                Long roomId = resultSet.getLong("id");
                RoomSearchResponse response = responseMap.get(roomId);

                if (response == null) {
                    response = new RoomSearchResponse();
                    response.setId(roomId);
                    response.setName(resultSet.getString("name"));
                    response.setDescription(resultSet.getString("description"));
                    response.setPrice(resultSet.getDouble("price"));
                    response.setCapacity(resultSet.getInt("capacity"));
                    response.setRoom_nums(resultSet.getInt("room_nums"));
                    response.setRoomStatus(RoomStatus.valueOf(resultSet.getString("room_status")));
                    response.setFacilities(new ArrayList<>());

                    responses.add(response);
                    responseMap.put(roomId, response);
                }

                Long facilityId = resultSet.getLong("facility_id");
                if (facilityId != null) {
                    Facility facility = new Facility();
                    facility.setId(facilityId);
                    facility.setName(resultSet.getString("facility_name"));
                    response.getFacilities().add(facility);
                }
            }

            return responses;
        });
    }

    public List<RoomSearchResponse> searchRoomByLocationAndCapacity(RoomSearchRequestByUser request) {
        String sql = "SELECT r.id id, r.name name, r.description description, r.price price, r.capacity capacity, " +
                "r.room_nums room_nums, r.room_status room_status, " +
                "f.id AS facility_id, f.name AS facility_name, " +
                "h.id AS hotel_id, h.name AS hotel_name, h.email AS hotel_email, h.phone AS hotel_phone, h.image_url AS hotel_imageUrl," +
                "h.description AS hotel_description, h.address AS hotel_address " +
                "FROM rooms r " +
                "LEFT JOIN room_facility rf ON r.id = rf.room_id " +
                "LEFT JOIN hotels h ON h.id = r.hotel_id " +
                "LEFT JOIN facilities f ON rf.facility_id = f.id " +
                "WHERE 1 = 1";  // WHERE 1 = 1 added for flexibility in building the query dynamically

        Map<String, Object> parameter = new HashMap<>();
        if (request.getLocation() != null && !request.getLocation().trim().equals("")) {
            sql += " and lower(h.address) like :location";
            parameter.put("location", "%" + request.getLocation().toLowerCase() + "%");
        }
        if (request.getNumberOfGuests() != null) {
            sql += " and r.capacity >= :guests";
            parameter.put("guests", request.getNumberOfGuests());
        }

        return getNamedParameterJdbcTemplate().query(sql, parameter, (resultSet) -> {
            List<RoomSearchResponse> responses = new ArrayList<>();
            Map<Long, RoomSearchResponse> responseMap = new HashMap<>();

            while (resultSet.next()) {
                Long roomId = resultSet.getLong("id");
                RoomSearchResponse response = responseMap.get(roomId);

                if (response == null) {
                    response = new RoomSearchResponse();
                    response.setId(roomId);
                    response.setName(resultSet.getString("name"));
                    response.setDescription(resultSet.getString("description"));
                    response.setPrice(resultSet.getDouble("price"));
                    response.setCapacity(resultSet.getInt("capacity"));
                    response.setRoom_nums(resultSet.getInt("room_nums"));
                    response.setRoomStatus(RoomStatus.valueOf(resultSet.getString("room_status")));
                    response.setFacilities(new ArrayList<>());

                    responses.add(response);
                    responseMap.put(roomId, response);
                }
                Long hotelId = resultSet.getLong("hotel_id");
                if (hotelId != null) {
                    Hotel hotel = new Hotel();
                    hotel.setId(hotelId);
                    hotel.setName(resultSet.getString("hotel_name"));
                    hotel.setPhone(resultSet.getString("hotel_phone"));
                    hotel.setDescription(resultSet.getString("hotel_description"));
                    hotel.setImageUrl(resultSet.getString("hotel_imageUrl"));
                    hotel.setEmail(resultSet.getString("hotel_email"));
                    hotel.setAddress(resultSet.getString("hotel_address"));
                    response.setHotel(hotel);
                }


                Long facilityId = resultSet.getLong("facility_id");
                if (facilityId != null) {
                    Facility facility = new Facility();
                    facility.setId(facilityId);
                    facility.setName(resultSet.getString("facility_name"));
                    response.getFacilities().add(facility);
                }
            }

            return responses;
        });
    }

}

