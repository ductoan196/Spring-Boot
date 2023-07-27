package com.example.travelbooking.entity;

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

    String address;

}
