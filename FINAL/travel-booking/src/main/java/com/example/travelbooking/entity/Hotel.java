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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "location_id")
    Location location;
}
