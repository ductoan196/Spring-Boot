package com.example.pet_shop_management.model.request;

import com.example.pet_shop_management.entity.Customer;
import com.example.pet_shop_management.statics.Status;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AppointmentRequest {
    Integer id;

    Customer customer;

    String description;

    Status status;

}
