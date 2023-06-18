package com.example.bus_management_sercurity.controller;

import com.example.bus_management_sercurity.entity.Driver;
import com.example.bus_management_sercurity.model.request.DriverCreatRequest;
import com.example.bus_management_sercurity.model.request.DriverUpdateRequest;
import com.example.bus_management_sercurity.model.response.DriverResponse;
import com.example.bus_management_sercurity.service.DriverService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping
@AllArgsConstructor

public class DriverController {
    DriverService driverService;

    @GetMapping("/drivers")
    public String getAll(Model model) {
        List<DriverResponse> driverResponseList = driverService.getAll();
        model.addAttribute("driverList", driverResponseList);
        model.addAttribute("newDriver", new DriverCreatRequest());

        return "driver-list";
    }

    @PostMapping("/drivers")
    public String saveDriver(@ModelAttribute("newDriver") @Valid DriverCreatRequest driverCreatRequest) {
        driverService.creat(driverCreatRequest);

        return "redirect:/drivers";
    }

    @GetMapping("/api/v1/drivers/{id}")
    public ResponseEntity<?> getDetail(@PathVariable Integer id) {
        return ResponseEntity.ok(driverService.getDriverById(id));

    }

    @PutMapping("api/v1/drivers/{id}")
    public ResponseEntity<?> updateDriver(@PathVariable Integer id, @Valid @RequestBody DriverUpdateRequest driverUpdateRequest) {
        driverUpdateRequest.setId(id);
        driverService.updateDriver(driverUpdateRequest);

        return ResponseEntity.ok(null);
    }

    @DeleteMapping("api/v1/drivers/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        driverService.delete(id);
        return ResponseEntity.ok(null);
    }
}
