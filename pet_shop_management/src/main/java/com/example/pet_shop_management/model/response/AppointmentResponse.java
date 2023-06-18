package com.example.pet_shop_management.model.response;

import com.example.pet_shop_management.entity.Customer;
import com.example.pet_shop_management.statics.Status;

import java.time.LocalDateTime;

public class AppointmentResponse {
    Integer id;

    Customer customer;

    String description;

    LocalDateTime createdAt;

    LocalDateTime updatedAt;


    Status status;
}
