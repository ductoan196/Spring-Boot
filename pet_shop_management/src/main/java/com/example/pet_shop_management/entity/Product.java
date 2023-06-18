package com.example.pet_shop_management.entity;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    Integer id;


    @Column(name = "name", nullable = false)
    String name;

    @Column(name = "price", nullable = false)
    double price;

    @Column(name = "description", nullable = false)
    String description;

}
