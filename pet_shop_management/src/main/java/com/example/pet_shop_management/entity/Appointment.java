package com.example.pet_shop_management.entity;

import com.example.pet_shop_management.statics.Status;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Builder
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "appointment")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    public Appointment() {
        this.status = Status.PENDING;
    }

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
