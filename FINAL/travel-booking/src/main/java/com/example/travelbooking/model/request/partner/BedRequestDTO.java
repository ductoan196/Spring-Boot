package com.example.travelbooking.model.request.partner;

import com.example.travelbooking.model.request.partner.CreateBedRequest;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BedRequestDTO {
    private List<CreateBedRequest> beds;
    private Long roomId;

}

