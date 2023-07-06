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
@Table(name = "facilities")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Facility extends BaseEntity{
    String name;
}
