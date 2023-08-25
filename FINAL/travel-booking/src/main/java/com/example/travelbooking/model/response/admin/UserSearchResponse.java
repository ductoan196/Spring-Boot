package com.example.travelbooking.model.response.admin;

import com.example.travelbooking.entity.Role;
import com.example.travelbooking.statics.UserStatus;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.Set;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserSearchResponse {
    Long id;

    String fullName;

    String email;

    String phone;

    Set<Role> roles;

    UserStatus userStatus;

    boolean isVerified;
}
