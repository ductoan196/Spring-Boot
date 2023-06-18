package com.example.pet_shop_management.serivce;

import com.example.pet_shop_management.entity.Product;
import com.example.pet_shop_management.model.request.ProductRequest;
import com.example.pet_shop_management.model.response.ProductResponse;
import com.example.pet_shop_management.repository.ProductRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    ObjectMapper objectMapper;

    public List<Product> getAllProduct() {
        List<Product> productList = productRepository.findAll();
        return productList;
    }

    public void saveProduct(ProductRequest request) {
        Product product = objectMapper.convertValue(request, Product.class);
        productRepository.save(product);
    }

    public ProductResponse getById(Integer id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> {
                    throw new RuntimeException("Not found product with Id " + id);
                });
        return objectMapper.convertValue(product, ProductResponse.class);
    }

    public void update(ProductRequest productRequest) {
        Product product = objectMapper.convertValue(productRequest, Product.class);

        productRepository.save(product);
    }
}
