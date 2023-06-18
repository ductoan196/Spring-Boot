package com.example.busmanagementajax.service;

import com.example.busmanagementajax.entity.Driver;
import com.example.busmanagementajax.model.request.DriverCreatRequest;
import com.example.busmanagementajax.model.request.DriverUpdateRequest;
import com.example.busmanagementajax.model.response.DriverResponse;
import com.example.busmanagementajax.statics.Level;
import com.example.busmanagementajax.validation.ObjectNotFoundException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DriverService {

    public static int AUTO_ID = 10000;
    List<Driver> drivers = new ArrayList<>();

    ObjectMapper objectMapper;

    @Autowired
    public DriverService(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public List<Driver> getAllDriver() {
        return drivers;
    }

    public void saveDriver(DriverCreatRequest driverCreatRequest) {
        Driver driver = objectMapper.convertValue(driverCreatRequest, Driver.class);
        driver.setId(AUTO_ID);
        drivers.add(driver);
        AUTO_ID++;
    }

    public void delete(int id) {
        drivers.removeIf(s -> s.getId() == id);
    }

    public Object findByIdVer2(int id) {
        Optional<Driver> studentOptional = drivers
                .stream()
                .filter(s -> s.getId() == id)
                .findFirst();
        if (studentOptional.isEmpty()) {
            throw new ObjectNotFoundException("Không tìm thấy tài xế mang mã " + id);
        }
        Driver driver = studentOptional.get();
        return objectMapper.convertValue(driver, DriverResponse.class);
    }

    public void updateDriver(DriverUpdateRequest driverUpdateRequest) {
        drivers.forEach(s -> {
            if (s.getId() != driverUpdateRequest.getId()) {
                return;
            }
            s.setName(driverUpdateRequest.getName());
            s.setAddress(driverUpdateRequest.getAddress());
            s.setPhone(driverUpdateRequest.getPhone());
            s.setLevel(Level.valueOf(driverUpdateRequest.getLevel()));
        });
    }
}
