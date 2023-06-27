package com.example.techmaster_admin_code.controlelr;

import com.example.techmaster_admin_code.model.Course;
import com.example.techmaster_admin_code.service.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@AllArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @PostMapping("/api/v1/admin/courses")
    public ResponseEntity<?> getAll(@RequestBody Course course) {

    }
}
