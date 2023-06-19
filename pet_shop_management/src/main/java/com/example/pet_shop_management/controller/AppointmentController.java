package com.example.pet_shop_management.controller;

import com.example.pet_shop_management.entity.Appointment;
import com.example.pet_shop_management.entity.Product;
import com.example.pet_shop_management.model.request.AppointmentRequest;
import com.example.pet_shop_management.model.request.ProductRequest;
import com.example.pet_shop_management.model.response.AppointmentResponse;
import com.example.pet_shop_management.serivce.AppointmentService;
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
public class AppointmentController {

    AppointmentService appointmentService;

    @GetMapping("/admin/appointments")
    public String getAppointments(Model model) {
        List<Appointment> appointmentList = appointmentService.getAllAppointments();
        model.addAttribute("danhSachLichKham", appointmentList);

        model.addAttribute("lichKhamMuonTaoMoi", new AppointmentRequest());

        return "appointment-list";
    }

    @PostMapping("/admin/appointments")
    public String creatAppointment(@ModelAttribute("lichKhamMuonTaoMoi") @Valid AppointmentRequest lichKhamMuonTaoMoi) {
        appointmentService.saveAppointment(lichKhamMuonTaoMoi);
        return "redirect:/admin/appointments";
    }

    @GetMapping("/api/v1/appointments/{id}")
    public ResponseEntity<?> getDetail(@PathVariable Integer id) {
        return ResponseEntity.ok(appointmentService.getById(id));
    }

    @PutMapping("/api/v1/appointments")
    public ResponseEntity<?> update(@RequestBody AppointmentRequest appointmentRequest) {
        appointmentService.update(appointmentRequest);
        return ResponseEntity.ok(null);
    }
}
