package com.example.travelbooking.entity;

import com.example.travelbooking.statics.TourStatus;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tours")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Tour extends BaseEntity{
    String name;

    String description;

    Double price;

    int tour_nums;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "location_id")
    Location location;

    @Enumerated(EnumType.STRING)
    TourStatus tourStatus;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "tour_facility",
            joinColumns = @JoinColumn(name = "tour_id"),
            inverseJoinColumns = @JoinColumn(name = "facility_id")
    )
    List<Facility> facilities;
}
