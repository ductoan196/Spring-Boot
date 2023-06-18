package com.example.pet_shop_update.entity;

import com.example.pet_shop_update.statics.Status;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Appointment {
    Integer id;


    Customer customer;

    String description;

    LocalDateTime createdAt;

    LocalDateTime updatedAt;

    Status status;

    public Appointment() {
        this.status = Status.PENDING;
    }

    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}
