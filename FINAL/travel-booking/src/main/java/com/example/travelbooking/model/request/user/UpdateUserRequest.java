package com.example.travelbooking.model.request.user;


import com.example.travelbooking.entity.Image;
import com.example.travelbooking.statics.Gender;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UpdateUserRequest {
    Long id;

    String fullName;

    String address;

    String phone;

    Gender gender;

    MultipartFile avatar;
}
