package com.example.bus_management_ajax.service;

import com.example.bus_management_ajax.entity.Route;
import com.example.bus_management_ajax.model.RouteModel;
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
public class RouteService {
    public static int AUTO_ID = 100;
    private List<Route> routes = new ArrayList<>();

    ObjectMapper objectMapper;

    public List<RouteModel> getAllRoute() {
        List<RouteModel> result = new ArrayList<>();
        for (int i = 0; i < routes.size(); i++) {
            Route driver = routes.get(i);
            result.add(objectMapper.convertValue(driver, RouteModel.class));
        }
        return result;
    }


    public void creatRoute(RouteModel driverModel) {
        driverModel.setId(AUTO_ID);
        AUTO_ID++;
        routes.add(objectMapper.convertValue(driverModel,Route.class));
    }


    public RouteModel findById(int id) {
        Optional<Route> driverOptional = routes
                .stream()
                .filter(s-> s.getId() == id)
                .findFirst();
        if (driverOptional.isEmpty()) {
            return null;
        }

        Route driver = driverOptional.get();
        return objectMapper.convertValue(driver, RouteModel.class);
    }

    public Route findRouteEntityByID(int id) {
        RouteModel routeModel = findById(id);
        return objectMapper.convertValue(routeModel, Route.class);
    }

    public void updateRoute(RouteModel routeModel) {
        routes.forEach(route->{
            if (route.getId() != routeModel.getId()) {
                return;
            }
            route.setDistance(routeModel.getDistance());
            route.setStopNumber(routeModel.getStopNumber());
        });
    }

    public void deleteRoute(int id) {
        routes.removeIf(s -> s.getId() == id);
    }
}
