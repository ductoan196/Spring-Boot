package com.example.travelbooking.entity;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "beds")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Bed extends BaseEntity{

    String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bed_type_id")
    BedType bedType;

    int bed_nums;
}
