package com.example.pet_store_management.repository;

import com.example.pet_store_management.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductRepository {
    List<Product> productList = new ArrayList<>();


    public List<Product> findAll() {
        return productList;
    }
}
