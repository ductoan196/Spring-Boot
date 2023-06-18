package com.example.pet_store_management.entity;

import com.example.pet_store_management.statics.Status;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import javax.persistence.PrePersist;
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

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}
