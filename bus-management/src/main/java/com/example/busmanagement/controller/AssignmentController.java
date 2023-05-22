package com.example.busmanagement.controller;

import com.example.busmanagement.entity.Driver;
import com.example.busmanagement.model.AssignmentModel;
import com.example.busmanagement.model.DriverModel;
import com.example.busmanagement.model.RouteModel;
import com.example.busmanagement.service.AssignmentService;
import com.example.busmanagement.service.DriverService;
import com.example.busmanagement.service.RouteService;
import com.example.busmanagement.statics.Level;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("assignments")
@AllArgsConstructor
public class AssignmentController {

    AssignmentService assignmentService;
    DriverService driverService;
    RouteService routeService;

    private void addOptionListsToModel(Model model) {
        List<DriverModel> driverModels= driverService.getAllDrivers();
        List<RouteModel> routeModels = routeService.getAllRoute();

        model.addAttribute("dsTaiXe", driverModels);
        model.addAttribute("dsTuyenDuong", routeModels);
    }


    @GetMapping
    public String getAllAssignment(Model model) {
        List<AssignmentModel> assignmentModels = assignmentService.getAllAssignment();
        model.addAttribute("assigmentList", assignmentModels);
        return "assignment-list";
    }

    @GetMapping("creat-form")
    public String forwardToCreatForm(Model model, AssignmentModel assignmentModel) {
        addOptionListsToModel(model);
        model.addAttribute("newAssignment", assignmentModel);
        return "creat-assignment";
    }

    @PostMapping
    public String creatAssignment(@ModelAttribute("newAssignment") @Valid AssignmentModel assignmentModel, Errors errors, Model model) {
        addOptionListsToModel(model);

        if (null != errors && errors.getErrorCount() > 0) {
            addOptionListsToModel(model);
            return "creat-assignment";
        } else {
            assignmentService.creatAssignment(assignmentModel);
            return "redirect:/assignments";
        }
    }

//    @GetMapping("/{id}/edit")
//    public String forwardToEditForm(@PathVariable int id, Model model) {
//        addOptionListsToModel(model);
//        AssignmentModel assignmentModel = assignmentService.find(id);
//        model.addAttribute("editDriver", driverModel);
//        return "edit-driver";
//    }
//
//    @PostMapping("/update")
//    public String updateDriver(@ModelAttribute("updateDriver") @Valid DriverModel driverModel, Errors errors, Model model) {
//        if (null != errors && errors.getErrorCount() > 0) {
//            addOptionListToModel(model);
//            return "edit-driver";
//        } else {
//            driverService.updateDriver(driverModel);
//            return "redirect:/drivers";
//        }
//    }
//
//    @GetMapping("/{id}/delete")
//    public String delete(@PathVariable int id) {
//        driverService.deleteDriver(id);
//        return "redirect:/drivers";
//    }
}
