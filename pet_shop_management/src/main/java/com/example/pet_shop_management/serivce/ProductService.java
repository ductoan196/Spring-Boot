package com.example.pet_shop_management.serivce;

import com.example.pet_shop_management.entity.Product;
import com.example.pet_shop_management.model.request.ProductRequest;
import com.example.pet_shop_management.model.response.ProductResponse;
import com.example.pet_shop_management.repository.ProductRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductService {

    ProductRepository productRepository;

    ObjectMapper objectMapper;
    List<Product> productList;

    public List<Product> getAllProduct() {
        productList = productRepository.findAll();
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
        productList.forEach(s -> {
            if (s.getId() != productRequest.getId()) {
                return;
            }
            s.setName(productRequest.getName());
            s.setPrice(productRequest.getPrice());
            s.setDescription(productRequest.getDescription());
        });
        productRepository.saveAll(productList);
    }
}
