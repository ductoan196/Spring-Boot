package com.example.pet_shop_update.controller;

import com.example.pet_shop_update.entity.Product;
import com.example.pet_shop_update.serivce.AppointmentService;
import com.example.pet_shop_update.serivce.ProductService;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping
@AllArgsConstructor
@FieldDefaults(level =  AccessLevel.PRIVATE)
public class WebController {

    final ProductService productService;
    final AppointmentService appointmentService;

    @GetMapping("/")
    public String getAllProduct(Model model) {
        List<Product> productList = productService.getAllProduct();
        model.addAttribute("productList", productList);

        return "index";
    }
}
