package com.example.travelbooking.entity;

import com.example.travelbooking.statics.BedType;
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
@Table(name = "beds")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Bed extends BaseEntity{

    BedType bedType;

    int quantity;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private Room room;
}
