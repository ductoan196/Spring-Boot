package com.example.travelbooking.repository;

import com.example.travelbooking.model.request.user.BookingSearchRequestByUser;
import com.example.travelbooking.model.response.user.BookingResponse;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Getter
@FieldDefaults(level = AccessLevel.PRIVATE)
public abstract class BaseRepository {

    @Autowired
    NamedParameterJdbcTemplate namedParameterJdbcTemplate;

}
