package com.example.travelbooking.repository.custom;

import com.example.travelbooking.model.request.admin.HotelSearchRequest;
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
public class HotelCustomRepository extends BaseRepository {

    public List<HotelSearchResponse> searchHotel(HotelSearchRequest request) {
        String sql = "select * from hotels h where 1 = 1";

        Map<String, Object> parameters = new HashMap<>();

        if (request.getEmail() != null && !request.getEmail().trim().equals("")) {
            sql += " and lower(h.email) like :email";
            parameters.put("email", "%" + request.getEmail().toLowerCase() + "%");
        }

        if (request.getName() != null && !request.getName().trim().equals("")) {
            sql += " and lower(u.username) like :name";
            parameters.put("name", "%" + request.getName().toLowerCase() + "%");
        }

        if (request.getAddress() != null && !request.getAddress().trim().equals("")) {
            sql += " and lower(u.username) like :address";
            parameters.put("address", "%" + request.getName().toLowerCase() + "%");
        }

        return getNamedParameterJdbcTemplate().query(sql, parameters, BeanPropertyRowMapper.newInstance(HotelSearchResponse.class));
    }
    }
