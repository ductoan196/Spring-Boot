package com.example.travelbooking.entity;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "locations")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Location extends BaseEntity {
    Double latitude;

    Double longitude;

    String province;

    String district;

    String ward;

    String street;
}
