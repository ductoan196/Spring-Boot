package com.example.goodreads_finalproject.entity;

import com.example.goodreads_finalproject.statics.Gender;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.time.LocalDate;
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

    String email;

    String password;

    @Column(nullable = false, columnDefinition = "BOOLEAN default false")
    boolean activated;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    String avatar;

    String fullName;

    @Enumerated(EnumType.STRING)
    Gender gender;

    LocalDate dob;

    String phone;

    @OneToOne
    @JoinColumn(name = "ward_code")
    Ward address;

    LocalDateTime deletedDateTime;

}
