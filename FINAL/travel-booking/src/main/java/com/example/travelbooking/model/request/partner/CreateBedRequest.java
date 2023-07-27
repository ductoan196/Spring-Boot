package com.example.travelbooking.model.request.partner;

import com.example.travelbooking.statics.BedType;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)

public class CreateBedRequest {
    String bedType;
    int quantity;
}
