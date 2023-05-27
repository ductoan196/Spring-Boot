package com.example.bus_management_ajax.controller;

import com.example.bus_management_ajax.model.AssignmentModel;
import com.example.bus_management_ajax.model.request.DriverCreatRequest;
import com.example.bus_management_ajax.model.RouteModel;
import com.example.bus_management_ajax.service.AssignmentService;
import com.example.bus_management_ajax.service.DriverService;
import com.example.bus_management_ajax.service.RouteService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping("assignments")
@AllArgsConstructor
public class AssignmentController {

    AssignmentService assignmentService;
    DriverService driverService;
    RouteService routeService;

    private void addOptionListsToModel(Model model) {
        List<DriverCreatRequest> driverCreatRequests = driverService.getAllDrivers();
        List<RouteModel> routeModels = routeService.getAllRoute();

        model.addAttribute("dsTaiXe", driverCreatRequests);
        model.addAttribute("dsTuyenDuong", routeModels);
    }


    @GetMapping
    public String getAllAssignment(Model model) {
        List<AssignmentModel> assignmentModels = assignmentService.getAllAssignment();
        model.addAttribute("assigmentList", assignmentModels);
        return "list/assignment-list";
    }

    @GetMapping("creat-form")
    public String forwardToCreatForm(Model model, AssignmentModel assignmentModel) {
        addOptionListsToModel(model);
        model.addAttribute("newAssignment", assignmentModel);
        return "creat/creat-assignment";
    }

    @PostMapping
    public String creatAssignment(@ModelAttribute("newAssignment") @Valid AssignmentModel assignmentModel, Errors errors, Model model) {
        addOptionListsToModel(model);

        if (null != errors && errors.getErrorCount() > 0) {
            addOptionListsToModel(model);
            return "creat/creat-assignment";
        } else {
            assignmentService.creatAssignment(assignmentModel);
            return "redirect:/assignments";
        }
    }

    @GetMapping("/{id}/edit")
    public String forwardToEditForm(@PathVariable int id, Model model) {
        addOptionListsToModel(model);
        AssignmentModel assignmentModel = assignmentService.findById(id);
        model.addAttribute("editAssignment", assignmentModel);
        return "edit/edit-assignment";
    }

    @PostMapping("/update")
    public String updateAssignment(@ModelAttribute("updateAssignment") @Valid AssignmentModel assignmentModel, Errors errors, Model model) {
        if (null != errors && errors.getErrorCount() > 0) {
            addOptionListsToModel(model);
            return "edit/edit-assignment";
        } else {
            assignmentService.updateAssignment(assignmentModel);
            return "redirect:/assignments";
        }
    }

    @GetMapping("/{id}/delete")
    public String delete(@PathVariable int id) {
        assignmentService.deleteAssignment(id);
        return "redirect:/assignments";
    }
}
