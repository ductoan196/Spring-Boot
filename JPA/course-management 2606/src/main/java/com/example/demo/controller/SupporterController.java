package com.example.demo.controller;

import com.example.demo.entity.Supporter;
import com.example.demo.entity.Supporter;
import com.example.demo.model.request.CreateSupporterRequest;
import com.example.demo.model.request.UpdateSupporterRequest;
import com.example.demo.service.SupporterService;
import com.example.demo.service.SupporterService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@AllArgsConstructor
public class SupporterController {
    SupporterService supporterService;

    //Danh sách View
    @GetMapping("admin/supporters")
    public String getSupporters(@RequestParam(required = false, defaultValue = "1") int page,
                            @RequestParam(required = false, defaultValue = "5") int pageSize, Model model) {

        Page<Supporter> supporterPage = supporterService.getAllSupporter(page, pageSize);
        model.addAttribute("currentPage", page);
        model.addAttribute("supporterPage", supporterPage);
        return "admin/supporter/supporter-list";
    }
    
    
    //Danh sách API

    @PostMapping("/api/v1/admin/supporters")
    public ResponseEntity<?> createSupporter(@Valid @RequestBody CreateSupporterRequest supporterRequest) {
        Supporter supporter = supporterService.createSupporter(supporterRequest);
        return new ResponseEntity<>(supporter, HttpStatus.CREATED);
    }

    @GetMapping("/api/v1/admin/supporter/{id}")
    public ResponseEntity<?> getSupporter(@PathVariable Integer id, Model model) {
        Supporter supporter = supporterService.findById(id);
        model.addAttribute("supporterId", id);
        return ResponseEntity.ok(supporter);
    }

    @PutMapping("/api/v1/admin/supporters/{id}")
    public ResponseEntity<?> updateSupporter(@PathVariable Integer id, @Valid @RequestBody UpdateSupporterRequest supporterRequest) {
        Supporter supporter = supporterService.updateSupporter(id, supporterRequest);
        return ResponseEntity.ok(supporter);
    }

    @DeleteMapping("api/admin/supporters/{id}")
    public ResponseEntity<?> deleteSupporter(@PathVariable Integer id) {
        supporterService.deleteById(id);
        return ResponseEntity.ok(null);
    }

}
