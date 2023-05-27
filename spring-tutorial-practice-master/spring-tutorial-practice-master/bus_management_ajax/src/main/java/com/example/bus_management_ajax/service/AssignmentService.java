package com.example.bus_management_ajax.service;

import com.example.bus_management_ajax.entity.Assignment;
import com.example.bus_management_ajax.entity.Driver;
import com.example.bus_management_ajax.entity.Route;
import com.example.bus_management_ajax.model.AssignmentModel;
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
public class AssignmentService {
    RouteService routeService;
    DriverService driverService;
    private static int AUTO_ID = 1;

    List<Assignment> assignments = new ArrayList<>();

    public List<AssignmentModel> getAllAssignment() {
        List<AssignmentModel> result = new ArrayList<>();
        assignments.forEach(assignment -> {
            AssignmentModel assignmentModel = AssignmentModel
                    .builder()
                    .id(assignment.getId())
                    .tenLaiXe(assignment.getDriver().getName())
                    .idLaiXe(assignment.getDriver().getId())
                    .soLuotChay(assignment.getSoLuotChay())
                    .khoangCachTuyen(assignment.getRoute().getDistance())
                    .idTuyen(assignment.getRoute().getId())
                    .build();

            result.add(assignmentModel);
        });
        return result;
    }

    public void creatAssignment(AssignmentModel assignmentModel) {

        Route route = routeService.findRouteEntityByID(assignmentModel.getIdTuyen());
        Driver driver = driverService.findDriverEntityByID(assignmentModel.getIdLaiXe());
        Assignment assignment = Assignment
                .builder()
                .driver(driver)
                .route(route)
                .soLuotChay(assignmentModel.getSoLuotChay())
                .build();

        assignments.add(assignment);
        assignment.setId(AUTO_ID);
        AUTO_ID++;
    }

    public AssignmentModel findById(int id) {
        Optional<Assignment> assignmentOptional = assignments
                .stream()
                .filter(s-> s.getId() == id)
                .findFirst();
        if (assignmentOptional.isEmpty()) {
            return null;
        }
        Assignment assignment = assignmentOptional.get();

        AssignmentModel assignmentModel = AssignmentModel
                .builder()
                .id(assignment.getId())
                .tenLaiXe(assignment.getDriver().getName())
                .idLaiXe(assignment.getDriver().getId())
                .soLuotChay(assignment.getSoLuotChay())
                .khoangCachTuyen(assignment.getRoute().getDistance())
                .idTuyen(assignment.getRoute().getId())
                .build();

        return assignmentModel;
    }

    public void updateAssignment(AssignmentModel assignmentModel) {
        Driver driver = driverService.findDriverEntityByID(assignmentModel.getIdLaiXe());
        Route route = routeService.findRouteEntityByID(assignmentModel.getIdTuyen());

        assignments.forEach(assignment->{
            if (assignment.getId() != assignmentModel.getId()) {
                return;
            }
            assignment.setDriver(driver);
            assignment.setRoute(route);
            assignment.setSoLuotChay(assignmentModel.getSoLuotChay());

        });
    }

    public void deleteAssignment(int id) {
        assignments.removeIf(s -> s.getId() == id);
    }
}

