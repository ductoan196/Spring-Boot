package com.example.pet_shop_test.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@AllArgsConstructor
@RequestMapping
public class ProductController {

    Product

    @GetMapping("/admin")
    public String adminPage(Model model) {
        model.addAttribute("products", productService.getAll());
        return "adminPage";
    }

    @PostMapping("/api/v1/products")
    public ResponseEntity<?> saveProduct(@RequestBody @Valid ProductRequest productRequest) {
        ProductResponse productResponse = productService.saveProduct(productRequest);
        return ResponseEntity.ok(productResponse);
    }

    @PutMapping("/api/v1/products/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Integer id, @RequestBody @Valid ProductRequest productRequest) throws NotFoundException {
        ProductResponse productResponse = productService.updateProduct(id, productRequest);
        return ResponseEntity.ok(productResponse);
    }

    @GetMapping("/api/v1/products/{id}")
    public ResponseEntity<?> findProductById(@PathVariable Integer id) throws NotFoundException {
        return ResponseEntity.ok(productService.findProductById(id));
    }
}
