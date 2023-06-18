package com.example.pet_store_management.controller;

import com.example.pet_store_management.model.request.ProductRequest;
import com.example.pet_store_management.model.request.ProductUpdateRequest;
import com.example.pet_store_management.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/admin")
@AllArgsConstructor
public class ProductController {
    ProductService productService;

    @PostMapping("/api/v1/products")
    public ResponseEntity<?> creatProduct(@RequestBody @Valid ProductRequest request) {
        productService.saveProduct(request);
        return ResponseEntity.ok(null);
    }

    @GetMapping("/api/v1/products/{id}")
    public ResponseEntity<?> getDetail(@PathVariable Integer id) {

        return ResponseEntity.ok(productService.getById(id));
    }
    @PutMapping ("/api/v1/products/")
    public ResponseEntity<?> updateProduct(@RequestBody @Valid ProductRequest request) {
        productService.saveProduct(request);
        return ResponseEntity.ok(null);
    }


}
