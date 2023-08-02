package com.example.travelbooking.repository.custom;

import com.example.travelbooking.model.request.partner.RoomSearchRequest;
import com.example.travelbooking.model.response.partner.RoomResponse;
import com.example.travelbooking.model.response.partner.RoomSearchResponse;
import com.example.travelbooking.repository.BaseRepository;
import lombok.Data;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@Data
public class RoomCustomRepository extends BaseRepository {
    public List<RoomSearchResponse> searchRoom(RoomSearchRequest request) {
        String sql = "SELECT r.id id, r.name name, r.description name, r.price price, r.capacity capacity, " +
                "r.room_nums room_nums, r.room_status room_status," +
                "f.id AS facility_id, f.name AS facility_name " +
                "FROM rooms r " +
                "LEFT JOIN room_facility rf ON r.id = rf.room_id " +
                "LEFT JOIN facilities f ON rf.facility_id = f.id " +
                "WHERE 1=1";
        Map<String, Object> parameter = new HashMap<>();

        if (request.getId()!= null){
            sql += " and r.id = :id";
            parameter.put("id",request.getId());
        }

        if (request.getName()!= null&& !request.getName().trim().equals("")){
            sql += " and lower(r.name) like :name";
            parameter.put("name", "%" + request.getName().toLowerCase() + "%");
        }

        if (request.getCapacity() != null){
            sql += " and r.capacity = :capacity";
            parameter.put("capacity", request.getCapacity());
        }
        if (request.getRoom_nums() != null){
            sql += " and lower(r.room_nums) = :room_nums";
            parameter.put("room_nums", request.getRoom_nums());
        }
//        if (request.getHotel().getAddress() != null){
//            sql += " and lower(u.capacity) = :capacity";
//            parameter.put("address", "%" + request.getHotel().getAddress() + "%");
//        }
        return getNamedParameterJdbcTemplate().query(sql, parameter, BeanPropertyRowMapper.newInstance(RoomSearchResponse.class));
    }
}
