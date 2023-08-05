package com.example.travelbooking.entity.location;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "administrative_units")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AdministrativeUnit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String full_name;
    String full_name_en;
    String short_name;
    String short_name_en;
    String code_name;
    String code_name_en;
}
