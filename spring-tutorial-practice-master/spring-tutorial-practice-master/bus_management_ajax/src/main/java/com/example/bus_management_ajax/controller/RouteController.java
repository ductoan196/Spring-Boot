package com.example.bus_management_ajax.controller;

import com.example.bus_management_ajax.model.RouteModel;
import com.example.bus_management_ajax.service.RouteService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
        return "list/route-list";
    }

    @GetMapping("creat-form")
    public String forwardToCreatForm(Model model, RouteModel routeModel) {

        model.addAttribute("newRoute", routeModel);
        return "creat/creat-route";
    }

    @PostMapping
    public String creatRoute(@ModelAttribute("newRoute") @Valid RouteModel routeModel, Errors errors) {

        if (null != errors && errors.getErrorCount() > 0) {
            return "creat/creat-route";
        } else {
            routeService.creatRoute(routeModel);
            return "redirect:/routes";
        }
    }

    @GetMapping("/{id}/edit")
    public String forwardToEditForm(@PathVariable int id, Model model) {
        RouteModel routeModel = routeService.findById(id);
        model.addAttribute("editRoute", routeModel);
        return "edit/edit-route";
    }

    @PostMapping("/update")
    public String updateRoute(@ModelAttribute("updateRoute") @Valid RouteModel routeModel, Errors errors) {
        if (null != errors && errors.getErrorCount() > 0) {
            return "edit/edit-route";
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
