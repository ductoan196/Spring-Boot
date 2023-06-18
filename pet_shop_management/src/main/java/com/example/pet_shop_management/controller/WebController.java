//package com.example.pet_shop_management.controller;
//
//import com.example.pet_shop_management.entity.Product;
//import com.example.pet_shop_management.model.response.ProductResponse;
//import com.example.pet_shop_management.serivce.AppointmentService;
//import com.example.pet_shop_management.serivce.ProductService;
//import lombok.AccessLevel;
//import lombok.AllArgsConstructor;
//import lombok.experimental.FieldDefaults;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@Controller
//@RequestMapping
//@AllArgsConstructor
//@FieldDefaults(level =  AccessLevel.PRIVATE)
//public class WebController {
//
//    ProductService productService;
//    AppointmentService appointmentService;
//
//    @GetMapping("/")
//    public String getAllProduct(Model model) {
//        List<ProductResponse> productList = productService.getAllProduct();
//        model.addAttribute("productList", productList);
//
//        return "index";
//    }
//
//}
