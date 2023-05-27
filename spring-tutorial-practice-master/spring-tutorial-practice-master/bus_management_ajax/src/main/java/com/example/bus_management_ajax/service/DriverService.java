package com.example.bus_management_ajax.service;

import com.example.bus_management_ajax.entity.Driver;
import com.example.bus_management_ajax.model.request.DriverCreatRequest;
import com.example.bus_management_ajax.model.response.DriverResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class DriverService {
    public static int AUTO_ID = 10000;
    private List<Driver> drivers = new ArrayList<>();

    ObjectMapper objectMapper;

    public List<DriverCreatRequest> getAllDrivers() {
        List<DriverCreatRequest> result = new ArrayList<>();
        for (int i = 0; i < drivers.size(); i++) {
            Driver driver = drivers.get(i);
            result.add(objectMapper.convertValue(driver, DriverCreatRequest.class));
        }
        return result;
    }


    public void creatDriver(DriverCreatRequest driverCreatRequest) {
        driverCreatRequest.setId(AUTO_ID);
        AUTO_ID++;
        drivers.add(objectMapper.convertValue(driverCreatRequest,Driver.class));
    }


    public DriverCreatRequest findById(int id) {
        Optional<Driver> driverOptional = drivers
                .stream()
                .filter(s-> s.getId() == id)
                .findFirst();
        if (driverOptional.isEmpty()) {
            return null;
        }

        Driver driver = driverOptional.get();
        return objectMapper.convertValue(driver, DriverCreatRequest.class);
    }

    public Driver findDriverEntityByID(int id) {
        DriverCreatRequest driverCreatRequest = findById(id);
        return objectMapper.convertValue(driverCreatRequest, Driver.class);
    }

    public void updateDriver(DriverCreatRequest driverCreatRequest) {
        drivers.forEach(driver->{
            if (driver.getId() != driverCreatRequest.getId()) {
                return;
            }
            driver.setName(driverCreatRequest.getName());
            driver.setAddress(driverCreatRequest.getAddress());
            driver.setPhone(driverCreatRequest.getPhone());
            driver.setLevel(driverCreatRequest.getLevel());
        });
    }

    public void deleteDriver(int id) {
        drivers.removeIf(s -> s.getId() == id);
    }

    public DriverResponse findByIdVer2(Integer id) {
        Optional<Driver> driverOptional = drivers
                .stream()
                .filter(s-> s.getId() == id)
                .findFirst();
        if (driverOptional.isEmpty()) {
            return null;
        }

        Driver driver = driverOptional.get();
        return objectMapper.convertValue(driver, DriverResponse.class);

    }
}
