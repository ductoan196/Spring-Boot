package com.example.travelbooking.entity;

import com.example.travelbooking.statics.Gender;
import com.example.travelbooking.statics.UserStatus;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User extends BaseEntity {

    @Column(name = "full_name")
     String fullName;

    @Column(name = "email", nullable = false, unique = true, length = 200)
     String email;

    @Column(name = "password", nullable = false)
     String password;

    @Column(name = "address")
     String address;

    @Column(name = "phone")
    String phone;

    @Enumerated(EnumType.STRING)
    Gender gender;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "avatar_id")
    Image avatar;

    @Enumerated(EnumType.STRING)
    UserStatus userStatus;

    @Column(name = "is_verified", nullable = false)
    boolean isVerified;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    Set<Role> roles = new HashSet<>();

    LocalDateTime deletedDateTime;

}
