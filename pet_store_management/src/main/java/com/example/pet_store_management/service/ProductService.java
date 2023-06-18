package com.example.pet_store_management.service;

import com.example.pet_store_management.entity.Product;
import com.example.pet_store_management.model.request.ProductRequest;
import com.example.pet_store_management.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductService {
    @Autowired
    ProductRepository productRepository;
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    public void saveProduct(ProductRequest request) {
    }

    public Object getById(Integer id) {
    }
}
