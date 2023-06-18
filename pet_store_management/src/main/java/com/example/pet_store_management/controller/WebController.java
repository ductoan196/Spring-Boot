package com.example.pet_store_management.controller;

import com.example.pet_store_management.entity.Appointment;
import com.example.pet_store_management.entity.Product;
import com.example.pet_store_management.service.AppointmentService;
import com.example.pet_store_management.service.ProductService;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.boot.Banner;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
@RequestMapping
@AllArgsConstructor
public class WebController {

    ProductService productService;
    AppointmentService appointmentService;

    @GetMapping("/")
    public String getAll(Model model) {
        List<Product> productList = productService.getAllProduct();
        model.addAttribute("productList" ,productList);

        return "index";
    }

    @GetMapping("/admin")
    public String getAllAppointment(Model model) {
        List<Appointment> appointmentList = appointmentService.getAllAppointment();
        model.addAttribute("appointmentList", appointmentList);

        return "contact";
    }
}
