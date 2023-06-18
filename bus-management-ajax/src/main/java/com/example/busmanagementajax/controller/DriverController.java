package com.example.busmanagementajax.controller;

import com.example.busmanagementajax.entity.Driver;
import com.example.busmanagementajax.model.request.DriverCreatRequest;
import com.example.busmanagementajax.model.request.DriverUpdateRequest;
import com.example.busmanagementajax.model.response.LevelResponse;
import com.example.busmanagementajax.service.DriverService;
import com.example.busmanagementajax.service.LevelService;
import com.example.busmanagementajax.statics.Level;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping
public class DriverController {

    DriverService driverService;

    LevelService levelService;

    @GetMapping("/drivers")
    public String getDrivers(Model model) {
        List<Driver> driverModels = driverService.getAllDriver();
        model.addAttribute("danhSachTaiXe", driverModels);

        model.addAttribute("taiXeMuonTaoMoi", new DriverCreatRequest());

        return "driver-list";
    }
//
    @PostMapping("/drivers")
    /** ==> không cần dùng @ModelAttribute khi class của attribute là model
     * @ModelAttribute trong trường hợp này các data được truyền qua parameter trên URL của request tới controller
     */
    public String createNewDriver(@ModelAttribute("taiXeMuonTaoMoi") @Valid DriverCreatRequest taiXeMuonTaoMoi) {
        driverService.saveDriver(taiXeMuonTaoMoi);
        return "redirect:/drivers";
    }

    @ModelAttribute("levelData")
    public List<LevelResponse> getAllRegions() {
        return levelService.getAll();
    }

    @GetMapping("/api/drivers/{id}")
    public ResponseEntity<?> getDriver(@PathVariable Integer id) {
        return ResponseEntity.ok(driverService.findByIdVer2(id));
    }

    @PutMapping("/api/drivers/{id}")
    public ResponseEntity<?> updateDriver(@PathVariable Integer id, @RequestBody @Valid DriverUpdateRequest driverUpdateRequest) {
        driverUpdateRequest.setId(id);
        driverService.updateDriver(driverUpdateRequest);
        return ResponseEntity.ok(null);
    }
}

