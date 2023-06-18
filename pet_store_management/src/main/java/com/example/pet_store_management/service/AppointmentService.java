package com.example.pet_store_management.service;

import com.example.pet_store_management.entity.Appointment;
import com.example.pet_store_management.entity.Product;
import com.example.pet_store_management.model.request.AppointmentRequest;
import com.example.pet_store_management.repository.AppointmentRepository;
import com.example.pet_store_management.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AppointmentService {
    @Autowired
    AppointmentRepository appointmentRepository;

    public List<Appointment> getAllAppointment() {
        return appointmentRepository.findAll();
    }

    public void saveAppointment(AppointmentRequest appointmentRequest) {
    }
}
