package com.example.busmanagement.service;

import com.example.busmanagement.entity.Driver;
import com.example.busmanagement.model.DriverModel;
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

    public List<DriverModel> getAllDrivers() {
        List<DriverModel> result = new ArrayList<>();
        for (int i = 0; i < drivers.size(); i++) {
            Driver driver = drivers.get(i);
            result.add(objectMapper.convertValue(driver, DriverModel.class));
        }
        return result;
    }


    public void creatDriver(DriverModel driverModel) {
        driverModel.setId(AUTO_ID);
        AUTO_ID++;
        drivers.add(objectMapper.convertValue(driverModel,Driver.class));
    }


    public DriverModel findById(int id) {
        Optional<Driver> driverOptional = drivers
                .stream()
                .filter(s-> s.getId() == id)
                .findFirst();
        if (driverOptional.isEmpty()) {
            return null;
        }

        Driver driver = driverOptional.get();
        return objectMapper.convertValue(driver, DriverModel.class);
    }

    public Driver findDriverEntityByID(int id) {
        DriverModel driverModel = findById(id);
        return objectMapper.convertValue(driverModel, Driver.class);
    }

    public void updateDriver(DriverModel driverModel) {
        drivers.forEach(driver->{
            if (driver.getId() != driverModel.getId()) {
                return;
            }
            driver.setName(driverModel.getName());
            driver.setAddress(driverModel.getAddress());
            driver.setPhone(driverModel.getPhone());
            driver.setLevel(driverModel.getLevel());
        });
    }

    public void deleteDriver(int id) {
        drivers.removeIf(s -> s.getId() == id);
    }
}
