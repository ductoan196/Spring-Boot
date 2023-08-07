package com.example.travelbooking.model.response;

import com.example.travelbooking.statics.Gender;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class JwtResponse {

    String jwt;

    String refreshToken;

    Long id;

    String email;

    Set<String> roles;

    String avatar;

    String fullName;

    Gender gender;
}
