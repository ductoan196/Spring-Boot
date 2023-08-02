package com.example.travelbooking.entity;

import com.example.travelbooking.statics.RoomStatus;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "rooms")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Room extends BaseEntity{

    String name;

    String description;

    Double price;

    Integer capacity;

    Integer room_nums;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hotel_id")
    Hotel hotel;

    @ElementCollection
    List<String> imageUrls = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    RoomStatus roomStatus;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "room_facility",
            joinColumns = @JoinColumn(name = "room_id"),
            inverseJoinColumns = @JoinColumn(name = "facility_id")
    )
    List<Facility> facilities;
}
