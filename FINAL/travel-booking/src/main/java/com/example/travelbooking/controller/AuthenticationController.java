package com.example.travelbooking.controller;

import com.example.travelbooking.entity.RefreshToken;
import com.example.travelbooking.entity.User;
import com.example.travelbooking.exception.OTPNotFoundException;
import com.example.travelbooking.exception.RefreshTokenNotFoundException;
import com.example.travelbooking.exception.UnverifiedAccountException;
import com.example.travelbooking.model.request.registration.*;
import com.example.travelbooking.model.request.user.ReActiveRequest;
import com.example.travelbooking.model.response.JwtResponse;
import com.example.travelbooking.repository.RefreshTokenRepository;
import com.example.travelbooking.repository.UserRepository;
import com.example.travelbooking.security.CustomUserDetails;
import com.example.travelbooking.security.JwtUtils;
import com.example.travelbooking.service.user.UserService;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.mail.MessagingException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/authentication")
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationController {

    JwtUtils jwtUtils;

    UserService userService;

    UserRepository userRepository;

    RefreshTokenRepository refreshTokenRepository;

    AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest request, HttpServletResponse response) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        if ("admin@gmail.com".equals(userDetails.getUsername())) {
            // Thực hiện các lệnh bên dưới khi email là admin@gmail.com
        } else {
            if (!userDetails.isVerified()) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Account is not activated");
            }
        }

        Set<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toSet());

        User user = userRepository.findById(userDetails.getId()).get();
        String avatarUrl;
        if (user.getAvatar() != null) {
            avatarUrl = user.getAvatar().getImageUrl();
        } else {
            avatarUrl = null;
        }
        String refreshToken = UUID.randomUUID().toString();
        RefreshToken refreshTokenEntity = RefreshToken.builder()
                .refreshToken(refreshToken)
                .user(user)
                .build();
        refreshTokenRepository.save(refreshTokenEntity);

         JwtResponse jwtResponse= JwtResponse.builder()
                .jwt(jwt)
                .refreshToken(refreshToken)
                .id(userDetails.getId())
                .email(userDetails.getUsername())
                .roles(roles)
                 .avatar(avatarUrl)
                 .fullName(user.getFullName())
                 .gender(user.getGender())
                .build();

        javax.servlet.http.Cookie jwtCookie = new Cookie("jwtToken", jwtResponse.getJwt());
        jwtCookie.setPath("/");
        response.addCookie(jwtCookie);

        return ResponseEntity.ok(jwtResponse);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse response) {
        Cookie jwtCookie = new Cookie("jwtToken", null);
        jwtCookie.setMaxAge(0);
        jwtCookie.setPath("/");
        response.addCookie(jwtCookie);

        userService.logout();
        return ResponseEntity.ok(null);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegistrationRequest request) {
        return userRepository.findByEmail(request.getEmail())
                .map(user -> new ResponseEntity<>("Email is existed", HttpStatus.BAD_REQUEST))
                .orElseGet(() -> {
                    userService.registerUser(request);
                    return new ResponseEntity<>(null, HttpStatus.CREATED);
                });
    }
    @PostMapping("/signup-partner")
    public ResponseEntity<?> registerPartner(@Valid @RequestBody RegistrationPartnerRequest request) {
        return userRepository.findByEmail(request.getEmail())
                .map(user -> new ResponseEntity<>("Email is existed", HttpStatus.BAD_REQUEST))
                .orElseGet(() -> {
                    userService.registerPartner(request);
                    return new ResponseEntity<>(null, HttpStatus.CREATED);
                });
    }

    @GetMapping("/verify")
    public ResponseEntity<?> verifyUser(@RequestParam("id") Long id, @RequestParam("code") String code) {
        boolean isVerified = userService.verifyUser(id, code);
        if (isVerified) {
            return ResponseEntity.status(HttpStatus.FOUND)
                    .header(HttpHeaders.LOCATION, "/success_page")
                    .build();
        } else {
            throw new OTPNotFoundException("Invalid OTP");
        }
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(@RequestBody @Valid RefreshTokenRequest request, HttpServletResponse response) {
        try {
            return ResponseEntity.ok(userService.refreshToken(request, response));
        } catch (RefreshTokenNotFoundException | UsernameNotFoundException ex) {
            return new ResponseEntity<>("Thông tin refreshToken không chính xác", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/reset-password/request")
    public ResponseEntity<?> sendPasswordResetCode(@RequestBody @Valid EmailForgotPassRequest request) {
        userService.sendResetPasswordCode(request);

        return ResponseEntity.ok("Mã xác nhận đã được gửi đến email");
    }

    @GetMapping("/reset-password/verify")
    public ModelAndView verifyResetPass(@RequestParam("id") Long id, @RequestParam("code") String code) {
        try {
            userService.verifyUser(id, code);
            ModelAndView modelAndView = new ModelAndView("/user/reset_new_password.html");
            modelAndView.addObject("userId", id);
            return modelAndView;
        }
        catch (OTPNotFoundException e){
            return new ModelAndView("/home");
        }

    }

    @PostMapping("/reset-password")
    public ModelAndView resetPassword(@Valid @RequestParam Long userId, @RequestParam String newPassword) {

        userService.resetPassword(userId, newPassword);

        return new  ModelAndView("/user/success-page.html");
    }

//    @PostMapping("/reset-password")
//    public ModelAndView resetPassword(@Valid @RequestBody ResetPasswordRequest resetPasswordRequest) {
//
//        userService.resetPassword(resetPasswordRequest);
//
//        return new  ModelAndView("/user/success-page.html");
//    }



    @PostMapping("/resend-active-email/")
    public ResponseEntity<?> resentActivationEmail(@RequestBody ReActiveRequest request){
        userService.resentActiveEmail(request.getEmail());
        return ResponseEntity.ok(HttpStatus.CREATED);
    }

}
