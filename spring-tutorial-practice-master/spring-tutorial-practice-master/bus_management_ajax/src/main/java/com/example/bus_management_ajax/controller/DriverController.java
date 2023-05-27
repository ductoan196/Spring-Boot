package com.example.bus_management_ajax.controller;

import com.example.bus_management_ajax.model.request.DriverCreatRequest;
import com.example.bus_management_ajax.model.response.LevelResponse;
import com.example.bus_management_ajax.service.DriverService;
import com.example.bus_management_ajax.statics.Level;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping
@AllArgsConstructor
public class DriverController {

    DriverService driverService;


    private void addOptionListToModel(Model model) {
        List<Level> levels = Arrays.asList(Level.values());
        model.addAttribute(levels);
    }

    @GetMapping("drivers")
    public String getAllDriver(Model model) {
        List<DriverCreatRequest> driverCreatRequests = driverService.getAllDrivers();
        model.addAttribute("driverList", driverCreatRequests);
        model.addAttribute("newDriver", new DriverCreatRequest());
        return "list/driver-list";
    }

//    @GetMapping("creat-form")
//    public String forwardToCreatForm(Model model, DriverCreatRequest driverCreatRequest) {
//        addOptionListToModel(model);
//        model.addAttribute("newDriver", driverCreatRequest);
//        return "creat/creat-driver";
//    }

    @PostMapping("drivers")
    public String creatDriver(@ModelAttribute("newDriver") @Valid DriverCreatRequest newDriver, Errors errors, Model model) {
//        addOptionListToModel(model);

        if (null != errors && errors.getErrorCount() > 0) {
            addOptionListToModel(model);
            return "creat/creat-driver";
        } else {
            driverService.creatDriver(newDriver);
            return "redirect:/drivers";
        }
    }

    @GetMapping("drivers/{id}/edit")
    public String forwardToEditForm(@PathVariable int id, Model model) {
        addOptionListToModel(model);
        DriverCreatRequest driverCreatRequest = driverService.findById(id);
        model.addAttribute("editDriver", driverCreatRequest);
        return "edit/edit-driver";
    }

    @PostMapping("drivers/update")
    public String updateDriver(@ModelAttribute("updateDriver") @Valid DriverCreatRequest driverCreatRequest, Errors errors, Model model) {
        if (null != errors && errors.getErrorCount() > 0) {
            addOptionListToModel(model);
            return "edit/edit-driver";
        } else {
            driverService.updateDriver(driverCreatRequest);
            return "redirect:/drivers";
        }
    }

    @ModelAttribute("levelData")
//    public List<LevelResponse> getAllLevels() {
//    }

    @GetMapping("drivers/{id}/delete")
    public String delete(@PathVariable int id) {
        driverService.deleteDriver(id);
        return "redirect:/drivers";
    }

    /////////////
    @GetMapping("/api/drivers/{id}")
    public ResponseEntity<?> getStudent(@PathVariable Integer id) {
        return ResponseEntity.ok(driverService.findByIdVer2(id));
    }
}
