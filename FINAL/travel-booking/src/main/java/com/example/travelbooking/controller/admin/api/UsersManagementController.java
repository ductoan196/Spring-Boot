package com.example.travelbooking.controller.admin.api;

import com.example.travelbooking.exception.ExistedUserException;
import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.model.request.registration.CreateUserRequest;
import com.example.travelbooking.model.request.user.UpdateUserRequest;
import com.example.travelbooking.model.response.UserResponse;
import com.example.travelbooking.service.user.UserService;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UsersManagementController {

    UserService userService;

    @GetMapping
    public List<UserResponse> getAll() {
        return userService.getAll();
    }

    @GetMapping("/{id}")
    public UserResponse getDetail(@PathVariable Long id) throws ClassNotFoundException {
        return userService.getDetail(id);
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody @Valid CreateUserRequest request) {
        try {
            userService.createUser(request);
            return ResponseEntity.ok(null);
        } catch (ExistedUserException ex) {
            return new ResponseEntity<>("username đã tồn tại", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{userId}")
    public ResponseEntity<?> deleteRoom(@PathVariable Long userId) {
        try {
            // Gọi phương thức xóa phòng từ service
            userService.lockUser(userId);
            return ResponseEntity.ok().build(); // Trả về HTTP status code 200 OK nếu xóa thành công
        } catch (NotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete room"); // Trả về HTTP status code 500 Internal Server Error nếu xảy ra lỗi trong quá trình xóa
        }
    }
}
