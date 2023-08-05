package com.example.travelbooking.model.response.partner;


import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CommonResponse<T> {
    Integer pageNumber;
    T data;
}
