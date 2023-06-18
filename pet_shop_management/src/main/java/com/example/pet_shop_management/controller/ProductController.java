package com.example.pet_shop_management.controller;

import com.example.pet_shop_management.entity.Product;
import com.example.pet_shop_management.model.request.ProductRequest;
import com.example.pet_shop_management.model.response.ProductResponse;
import com.example.pet_shop_management.serivce.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping
@AllArgsConstructor
public class ProductController {
    ProductService productService;

    @GetMapping("/admin")
    public String getStudents(Model model) {
        List<Product> productList = productService.getAllProduct();
        model.addAttribute("danhSachSanPham", productList);

        model.addAttribute("sanPhamMuonTaoMoi", new ProductRequest());

        return "product-list";
    }

    @PostMapping("/admin/products")
    public String creatProduct(@ModelAttribute("sanPhamMuonTaoMoi") @Valid ProductRequest sanPhamMuonTaoMoi) {
        productService.saveProduct(sanPhamMuonTaoMoi);
        return "redirect:/admin";
    }
    
//    @PostMapping("/api/v1/products")
//    public ResponseEntity<?> creatProduct(@RequestBody ProductRequest request) {
//        productService.saveProduct(request);
//        return ResponseEntity.ok(null);
//    }

    ///API


    @GetMapping("/api/v1/products/{id}")
    public ResponseEntity<?> getDetail(@PathVariable Integer id) {
        return ResponseEntity.ok(productService.getById(id));
    }

    @PutMapping("/api/v1/products")
    public ResponseEntity<?> update(@RequestBody ProductRequest productRequest) {
        productService.update(productRequest);
        return ResponseEntity.ok(null);
    }

}
