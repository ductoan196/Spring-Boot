package com.example.travelbooking.entity.location;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

@Entity
@Table(name = "provinces")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Province {
    @Id
    String code;
    String name;
    String name_en;
    String full_name;
    String full_name_en;
    String code_name;

    @ManyToOne
    @JoinColumn(name = "administrative_unit_id")
    AdministrativeUnit administrative_unit;

    @ManyToOne
    @JoinColumn(name = "administrative_region_id")
    AdministrativeRegion administrative_region;
}
