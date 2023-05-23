package com.example.busmanagement.controller;

import com.example.busmanagement.model.DriverModel;
import com.example.busmanagement.model.RouteModel;
import com.example.busmanagement.service.DriverService;
import com.example.busmanagement.service.RouteService;
import com.example.busmanagement.statics.Level;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("routes")
@AllArgsConstructor
public class RouteController {

    RouteService routeService;


    @GetMapping
    public String getAllRoute(Model model) {
        List<RouteModel> driverModels = routeService.getAllRoute();
        model.addAttribute("routeList", driverModels);
        return "route-list";
    }

    @GetMapping("creat-form")
    public String forwardToCreatForm(Model model, RouteModel routeModel) {

        model.addAttribute("newRoute", routeModel);
        return "creat-route";
    }

    @PostMapping
    public String creatRoute(@ModelAttribute("newRoute") @Valid RouteModel routeModel, Errors errors) {

        if (null != errors && errors.getErrorCount() > 0) {
            return "creat-route";
        } else {
            routeService.creatRoute(routeModel);
            return "redirect:/routes";
        }
    }

    @GetMapping("/{id}/edit")
    public String forwardToEditForm(@PathVariable int id, Model model) {
        RouteModel routeModel = routeService.findById(id);
        model.addAttribute("editRoute", routeModel);
        return "edit-route";
    }

    @PostMapping("/update")
    public String updateRoute(@ModelAttribute("updateRoute") @Valid RouteModel routeModel, Errors errors) {
        if (null != errors && errors.getErrorCount() > 0) {
            return "edit-route";
        } else {
            routeService.updateRoute(routeModel);
            return "redirect:/routes";
        }
    }

    @GetMapping("/{id}/delete")
    public String delete(@PathVariable int id) {
        routeService.deleteRoute(id);
        return "redirect:/routes";
    }
}
