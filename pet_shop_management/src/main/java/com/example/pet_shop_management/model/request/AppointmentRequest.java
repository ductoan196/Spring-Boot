package com.example.pet_shop_management.model.request;

import com.example.pet_shop_management.entity.Customer;
import com.example.pet_shop_management.statics.Status;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AppointmentRequest {
    Integer id;

    Customer customer;

    String description;

    Status status;


}
