package com.example.pet_shop_management.controller;

import com.example.pet_shop_management.model.request.AppointmentRequest;
import com.example.pet_shop_management.model.request.ProductRequest;
import com.example.pet_shop_management.model.response.AppointmentResponse;
import com.example.pet_shop_management.model.response.ProductResponse;
import com.example.pet_shop_management.serivce.AppointmentService;
import com.example.pet_shop_management.serivce.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping("/admin")
@AllArgsConstructor
public class AppointmentController {

    AppointmentService appointmentService;

    @GetMapping("api/v1/appointments")
    public List<AppointmentResponse> getAllProduct(Model model) {
        return appointmentService.getAllAppointments();
    }


    @PostMapping("/api/v1/appointments")
    public ResponseEntity<?> creatAppointment(@RequestBody @Valid AppointmentRequest appointmentRequest) {
        appointmentService.saveAppointment(appointmentRequest);
        return ResponseEntity.ok(null);
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
