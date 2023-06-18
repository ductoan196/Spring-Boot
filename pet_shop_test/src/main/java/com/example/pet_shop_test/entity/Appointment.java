package com.example.pet_shop_test.entity;

import lombok.*;
import lombok.experimental.FieldDefaults;
import statics.Status;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "product")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    Integer id;

    @OneToOne
    @JoinColumn(name = "user_id")
    Customer user;

    @Column(name = "message")
    String message;

    @Column(name = "status")
    Status status;

    @Column(name = "created_at")
    LocalDateTime createdAt;

    @Column(name = "appointment_at")
    LocalDate appointmentAt;

    @Column(name = "updated_at")
    LocalDateTime updatedAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
        this.status = Status.PENDING;
    }

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
