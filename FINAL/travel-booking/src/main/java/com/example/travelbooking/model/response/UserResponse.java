package com.example.travelbooking.model.response;

import com.example.travelbooking.statics.Gender;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import org.springframework.web.multipart.MultipartFile;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserResponse {

    Long id;

//    String username;

    String fullname;

    String email;

    String address;

    String phone;

    Gender gender;

    String avatar;
}
