package com.example.pet_shop_management.model.response;

import com.example.pet_shop_management.entity.Customer;
import com.example.pet_shop_management.statics.Status;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.time.LocalDateTime;

public class AppointmentResponse {
    Integer id;

    @OneToOne
    @JoinColumn(name = "customer_id")
    Customer customer;

    @Column(name = "description")
    String description;

    @Column(name = "created_at")
    LocalDateTime createdAt;


    @Column(name = "updated_at")
    LocalDateTime updatedAt;


    @Column(name = "column")
    Status status;
}
