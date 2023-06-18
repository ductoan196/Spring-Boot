package com.example.bus_management_sercurity.service;

import com.example.bus_management_sercurity.entity.Driver;
import com.example.bus_management_sercurity.model.request.DriverCreatRequest;
import com.example.bus_management_sercurity.model.request.DriverUpdateRequest;
import com.example.bus_management_sercurity.model.response.DriverResponse;
import com.example.bus_management_sercurity.validation.ObjectNotFoundException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class DriverService {

    List<Driver> driverList = new ArrayList<>();
    ObjectMapper objectMapper;
    public static int AUTO_ID =1;

    public List<DriverResponse> getAll() {
        if (!driverList.isEmpty()) {
            return driverList.stream().map(s -> objectMapper.convertValue(s, DriverResponse.class)).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    public void creat(DriverCreatRequest driverCreatRequest) {
        Driver driver = objectMapper.convertValue(driverCreatRequest, Driver.class);
        driver.setId(AUTO_ID);
        AUTO_ID++;
        driverList.add(driver);
    }


    public DriverResponse getDriverById(Integer id) {
        Optional<Driver> studentOptional = driverList
                .stream()
                .filter(s -> s.getId() == id)
                .findFirst();
        if (studentOptional.isEmpty()) {
            throw new ObjectNotFoundException("Không tìm thấy sinh viên mang mã " + id);
        }
        Driver driver = studentOptional.get();
        return objectMapper.convertValue(driver, DriverResponse.class);
    }

    public void updateDriver(DriverUpdateRequest driverUpdateRequest) {
//        driverList.stream().map(driver -> Driver.builder()
//                .name(driverUpdateRequest.getName())
//                .address(driverUpdateRequest.getAddress())
//                .phone(driverUpdateRequest.getPhone())
//                .level(driverUpdateRequest.getLevel())
//                .build()
//        );

        driverList.forEach(driver -> {
            if (driver.getId() != driverUpdateRequest.getId()) {
                return;
            }
            driver.setName(driverUpdateRequest.getName());
            driver.setAddress(driverUpdateRequest.getAddress());
            driver.setPhone(driverUpdateRequest.getPhone());
            driver.setLevel(driverUpdateRequest.getLevel());
        });

    }


    public void delete(Integer id) {
        driverList.removeIf(driver -> driver.getId() == id);
    }
}
