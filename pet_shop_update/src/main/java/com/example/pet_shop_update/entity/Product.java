package com.example.pet_shop_update.entity;

import lombok.*;
import lombok.experimental.FieldDefaults;



@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Product {

    Integer id;


    String name;

    double price;

    String description;

    String imageUrl;
}
