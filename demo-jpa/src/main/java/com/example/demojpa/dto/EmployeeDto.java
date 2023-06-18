package com.example.demojpa.dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {

    Integer id;

    String name;

    String email;
}

// Cách 1:Query Entity -> Mapper -> Dto
//Mapper có thể tự viết hoặc sử dụng thư viện bên ngoài: Object Mapper, MapStruct
// Cách 2: JPQL
// Cách 3: Native Query
// Cách 4: Sử dụng Projectioin (interface) => Tự tìm hiểu