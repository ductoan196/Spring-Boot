package com.example.pet_shop_management.serivce;

import com.example.pet_shop_management.entity.Appointment;
import com.example.pet_shop_management.model.request.AppointmentRequest;
import com.example.pet_shop_management.model.response.AppointmentResponse;
import com.example.pet_shop_management.model.response.StatusResponse;
import com.example.pet_shop_management.repository.AppointmentRepository;
import com.example.pet_shop_management.statics.Status;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor

public class AppointmentService {

    ObjectMapper objectMapper;
    AppointmentRepository appointmentRepository;

    public List<Appointment> getAllAppointments() {
        List<Appointment> appointmentList = appointmentRepository.findAll();
        return appointmentList;
    }

    public void saveAppointment(AppointmentRequest appointmentRequest) {
        Appointment appointment = objectMapper.convertValue(appointmentRequest, Appointment.class);

        appointmentRepository.save(appointment);
    }

    public AppointmentResponse getById(Integer id) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> {
                    throw new RuntimeException("Not found product with Id " + id);
                });

        return objectMapper.convertValue(appointment, AppointmentResponse.class);
    }

    public void update(AppointmentRequest appointmentRequest) {
        Appointment appointment = objectMapper.convertValue(appointmentRequest, Appointment.class);

        appointmentRepository.save(appointment);
    }

    public List<StatusResponse> getStatus() {
        return List.of(
                StatusResponse.builder().code(Status.PENDING.getCode()).name(Status.PENDING.getName()).build(),
                StatusResponse.builder().code(Status.ACCEPTED.getCode()).name(Status.ACCEPTED.getName()).build(),
                StatusResponse.builder().code(Status.REJECTED.getCode()).name(Status.REJECTED.getName()).build()
        );
    }
}
