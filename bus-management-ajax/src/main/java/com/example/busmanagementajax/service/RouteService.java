package com.example.busmanagementajax.service;

import com.example.busmanagementajax.entity.Route;
import com.example.busmanagementajax.model.request.RouteCreateRequest;
import com.example.busmanagementajax.model.request.RouteUpdateRequest;
import com.example.busmanagementajax.model.response.RouteResponse;
import com.example.busmanagementajax.validation.ObjectNotFoundException;
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
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RouteService {
    public static  int AUTO_ID = 100;
    List<Route> routes = new ArrayList<>();

    ObjectMapper objectMapper;

    public List<Route> getAllRoutes() {
        return routes;
    }


    public void saveRoute(RouteCreateRequest routeCreateRequest) {
        Route route = objectMapper.convertValue(routeCreateRequest, Route.class);
        route.setId(AUTO_ID);
        AUTO_ID++;
        routes.add(route);

    }

    public Object findById(int id) {
        Optional<Route> routeOptional = routes
                .stream()
                .filter(s -> s.getId() == id)
                .findFirst();

        if (routeOptional.isEmpty()) {
            throw new ObjectNotFoundException("Không tìm thấy tuyến đường có id " + id);
        }
        Route route = routeOptional.get();
        return objectMapper.convertValue(route, RouteResponse.class);

    }

    public void updateRoute(RouteUpdateRequest routeUpdateRequest) {
        routes.forEach(s ->{
            if (s.getId() != routeUpdateRequest.getId()) {
                return;
            }

            s.setDistance(routeUpdateRequest.getDistance());
            s.setStopNumber(routeUpdateRequest.getStopNumber());

        });

    }
}
