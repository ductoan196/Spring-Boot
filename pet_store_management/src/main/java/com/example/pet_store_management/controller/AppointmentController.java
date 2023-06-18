package com.example.pet_store_management.controller;

import com.example.pet_store_management.entity.Appointment;
import com.example.pet_store_management.model.request.AppointmentRequest;
import com.example.pet_store_management.service.AppointmentService;
import com.fasterxml.classmate.members.ResolvedParameterizedMember;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/admin")
@AllArgsConstructor
public class AppointmentController {

    AppointmentService appointmentService;

    @GetMapping("/api/v1/appointments")
    public List<Appointment> getAll(Model model) {
        return appointmentService.getAllAppointment();
    }

    @PostMapping("/api/v1/appointments")
    public ResponseEntity<?> creat(@RequestBody @Valid AppointmentRequest appointmentRequest) {
        appointmentService.saveAppointment(appointmentRequest);
        return ResponseEntity.ok(null);
    }

    @GetMapping("/api/v1/appointments/{id}")
    public ResponseEntity<?> getDetail(@PathVariable Integer id) {
        return appointmentService.getById(id);
    }
}
