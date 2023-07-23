package com.example.travelbooking.model.request.partner;

import com.example.travelbooking.statics.BedType;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CreateBedRequest {

    @NotNull(message = "Bed type must not be null")
    BedType bedType;

    @Positive(message = "Quantity must be a positive number")
    int quantity;
}
