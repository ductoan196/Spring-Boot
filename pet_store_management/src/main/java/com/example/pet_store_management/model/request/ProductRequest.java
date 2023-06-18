package com.example.pet_store_management.model.request;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductRequest {

    @Size(max = 100, message = "Name cannot over 100 characters")
    @NotBlank(message = "Student name cannot be blank")
    String name;


    double price;

    @Length(max = 255)
    String description;

    String imageUrl;
}
