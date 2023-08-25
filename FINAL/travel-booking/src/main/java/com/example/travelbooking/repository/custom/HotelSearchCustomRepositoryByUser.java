package com.example.travelbooking.repository.custom;

import com.example.travelbooking.entity.Hotel;
import com.example.travelbooking.model.request.user.RoomSearchRequestByUser;
import com.example.travelbooking.model.response.admin.HotelSearchResponse;
import com.example.travelbooking.repository.BaseRepository;
import lombok.Data;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@Data
public class HotelSearchCustomRepositoryByUser extends BaseRepository {
    public List<Hotel> searchAvailableHotels(RoomSearchRequestByUser searchRequest) {
        String sql = "SELECT DISTINCT h.* FROM hotels h " +
                "INNER JOIN rooms r ON h.id = r.hotel_id " +
                "LEFT JOIN room_availability ra ON r.id = ra.room_id " +
                "WHERE 1 = 1";

        Map<String, Object> parameter = new HashMap<>();

        if (searchRequest.getLocation() != null) {
            sql += " AND h.location = :location";
            parameter.put("location", searchRequest.getLocation());
        }

        // Add more conditions as needed based on other search criteria
        List<Hotel> hotels = getNamedParameterJdbcTemplate().query(sql, parameter, BeanPropertyRowMapper.newInstance(Hotel.class));

        return hotels;

    }
}
