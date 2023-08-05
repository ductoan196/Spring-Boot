package com.example.travelbooking.entity;

import com.example.travelbooking.entity.location.Ward;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "hotels")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Hotel extends BaseEntity{

    @Column(name = "name", nullable = false, length = 200)
    String name;

    String email;

    String phone;

    String imageUrl;

    String province;

    String district;

    String ward;

    String street;

    //Full address (street + ward + district + province)
    String address;
}
