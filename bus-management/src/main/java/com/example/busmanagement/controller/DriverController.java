package com.example.busmanagement.controller;

import com.example.busmanagement.entity.Driver;
import com.example.busmanagement.model.DriverModel;
import com.example.busmanagement.service.DriverService;
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
@RequestMapping("drivers")
@AllArgsConstructor
public class DriverController {

    DriverService driverService;


    private void addOptionListToModel(Model model) {
        List<Level> levels = Arrays.asList(Level.values());
        model.addAttribute(levels);
    }

    @GetMapping
    public String getAllDriver(Model model) {
        List<DriverModel> driverModels = driverService.getAllDrivers();
        model.addAttribute("driverList", driverModels);
        return "driver-list";
    }

    @GetMapping("creat-form")
    public String forwardToCreatForm(Model model, DriverModel driverModel) {
        addOptionListToModel(model);
        model.addAttribute("newDriver", driverModel);
        return "creat-driver";
    }

    @PostMapping
    public String creatDriver(@ModelAttribute("newDriver") @Valid DriverModel driverModel, Errors errors, Model model) {
        addOptionListToModel(model);

        if (null != errors && errors.getErrorCount() > 0) {
            addOptionListToModel(model);
            return "creat-driver";
        } else {
            driverService.creatDriver(driverModel);
            return "redirect:/drivers";
        }
    }

    @GetMapping("/{id}/edit")
    public String forwardToEditForm(@PathVariable int id, Model model) {
        addOptionListToModel(model);
        DriverModel driverModel = driverService.findById(id);
        model.addAttribute("editDriver", driverModel);
        return "edit-driver";
    }

    @PostMapping("/update")
    public String updateDriver(@ModelAttribute("updateDriver") @Valid DriverModel driverModel, Errors errors, Model model) {
        if (null != errors && errors.getErrorCount() > 0) {
            addOptionListToModel(model);
            return "edit-driver";
        } else {
            driverService.updateDriver(driverModel);
            return "redirect:/drivers";
        }
    }

    @GetMapping("/{id}/delete")
    public String delete(@PathVariable int id) {
        driverService.deleteDriver(id);
        return "redirect:/drivers";
    }
}
