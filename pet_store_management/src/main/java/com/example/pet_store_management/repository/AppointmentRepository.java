package com.example.pet_store_management.repository;

import com.example.pet_store_management.entity.Appointment;
import com.example.pet_store_management.entity.Product;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class AppointmentRepository {
    List<Appointment> appointmentList = new ArrayList<>();


    public List<Appointment> findAll() {
        return appointmentList;
    }
}
