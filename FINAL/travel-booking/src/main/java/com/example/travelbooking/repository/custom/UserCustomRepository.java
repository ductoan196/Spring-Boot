package com.example.travelbooking.repository.custom;

import com.example.travelbooking.entity.Room;
import com.example.travelbooking.entity.RoomReservation;
import com.example.travelbooking.entity.User;
import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.model.request.admin.UserSearchRequest;
import com.example.travelbooking.model.response.admin.UserSearchResponse;
import com.example.travelbooking.model.response.user.BookingResponse;
import com.example.travelbooking.repository.BaseRepository;
import com.example.travelbooking.statics.BookingStatus;
import com.example.travelbooking.statics.UserStatus;
import lombok.Data;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@Data
public class UserCustomRepository extends BaseRepository {

    public List<UserSearchResponse> searchUser(UserSearchRequest request) {
        String sql = "select * from users u where 1 = 1";

        Map<String, Object> parameters = new HashMap<>();

        if (request.getEmail() != null && !request.getEmail().trim().equals("")) {
            sql += " and lower(u.email) like :email";
            parameters.put("email", "%" + request.getEmail().toLowerCase() + "%");
        }

        if (request.getFullName() != null && !request.getFullName().trim().equals("")) {
            sql += " and lower(u.full_name) like :fullName";
            parameters.put("fullName", "%" + request.getFullName().toLowerCase() + "%");
        }

        System.out.println(sql);
        if (request.getPhone() != null && !request.getPhone().trim().equals("")) {
            sql += " and lower(u.phone) like :phone";
            parameters.put("phone", "%" + request.getPhone().toLowerCase() + "%");
        }
        return getNamedParameterJdbcTemplate().query(sql, parameters, (resultSet) -> {
            List<UserSearchResponse> responses = new ArrayList<>();

            while (resultSet.next()) {
                UserSearchResponse userResponse = new UserSearchResponse();
                userResponse.setId(resultSet.getLong("id"));
                userResponse.setEmail(resultSet.getString("email"));
                userResponse.setFullName(resultSet.getString("full_name"));
                userResponse.setPhone(resultSet.getString("phone"));
                userResponse.setUserStatus(UserStatus.valueOf(resultSet.getString("user_status")));
                userResponse.setVerified(resultSet.getInt("is_verified") == 1);
                responses.add(userResponse);
            }
            return responses;
        });
    }
}
