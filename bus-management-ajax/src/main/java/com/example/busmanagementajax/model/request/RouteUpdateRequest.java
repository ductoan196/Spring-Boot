package com.example.busmanagementajax.model.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RouteUpdateRequest {

    int id;

    @Min(value = 0, message = "Distance cannot be less than 0")
    float distance;

    @Min(value = 0, message = "Stop number cannot be less than 0")
    int stopNumber;
}
