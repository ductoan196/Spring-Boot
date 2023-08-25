package com.example.travelbooking.model.request.admin;

import com.example.travelbooking.entity.Role;
import com.example.travelbooking.model.request.BaseSearchRequest;
import com.example.travelbooking.statics.UserStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserSearchRequest extends BaseSearchRequest {
    Long id;

    String fullName;

    String email;

    String phone;

    Set<Role> roles;

    UserStatus userStatus;

    boolean isVerified;
}
