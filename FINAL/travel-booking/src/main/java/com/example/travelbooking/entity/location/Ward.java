package com.example.travelbooking.entity.location;


import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

@Entity
@Table(name = "wards")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Ward {
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
    @JoinColumn(name = "district_code")
    District district;
}

