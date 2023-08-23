package com.example.travelbooking.controller.user.api;

import com.example.travelbooking.model.request.user.CreateBookingRequest;
import com.example.travelbooking.model.request.user.UpdateUserRequest;
import com.example.travelbooking.model.response.UserResponse;
import com.example.travelbooking.service.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/v1/user")
@AllArgsConstructor
public class AccountController {

    UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getDetail(@PathVariable Long id) throws ClassNotFoundException {
        UserResponse userResponse = userService.getDetail(id);
        return ResponseEntity.ok(userResponse);
    }

    @PutMapping
    public ResponseEntity<?> updateUser(@ModelAttribute UpdateUserRequest request) {
        UserResponse userResponse = userService.updateUser(request);
        return ResponseEntity.ok(userResponse);
    }

    @PutMapping("/change-password")
    public ResponseEntity<?> changePassword(Model model) {
        return ResponseEntity.ok("Successfull update");
    }
}
