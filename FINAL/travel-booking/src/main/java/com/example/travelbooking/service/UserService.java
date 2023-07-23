package com.example.travelbooking.service;

import com.example.travelbooking.entity.Hotel;
import com.example.travelbooking.entity.OTP;
import com.example.travelbooking.exception.*;
import com.example.travelbooking.model.request.*;
import com.example.travelbooking.repository.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.example.travelbooking.entity.Role;
import com.example.travelbooking.entity.User;
import com.example.travelbooking.model.response.JwtResponse;
import com.example.travelbooking.model.response.UserResponse;
import com.example.travelbooking.security.CustomUserDetails;
import com.example.travelbooking.security.JwtUtils;
import com.example.travelbooking.security.SecurityUtils;
import com.example.travelbooking.statics.Roles;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import javax.mail.MessagingException;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserService {

    final PasswordEncoder passwordEncoder;

    final UserRepository userRepository;

    final RoleRepository roleRepository;

    final HotelRepository hotelRepository;

    @Autowired
    final OTPRepository otpRepository;

    final ObjectMapper objectMapper;

    final RefreshTokenRepository refreshTokenRepository;

    EmailService emailService;

    @Value("${application.security.refreshToken.tokenValidityMilliseconds}")
    long refreshTokenValidityMilliseconds;

    final JwtUtils jwtUtils;

    public UserService(PasswordEncoder passwordEncoder, UserRepository userRepository,
                       RoleRepository roleRepository, HotelRepository hotelRepository, OTPRepository otpRepository, ObjectMapper objectMapper,
                       RefreshTokenRepository refreshTokenRepository, JwtUtils jwtUtils, EmailService emailService) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.hotelRepository = hotelRepository;
        this.otpRepository = otpRepository;
        this.objectMapper = objectMapper;
        this.refreshTokenRepository = refreshTokenRepository;
        this.jwtUtils = jwtUtils;
        this.emailService = emailService;
    }

    @Transactional
    public void registerUser(RegistrationRequest registrationRequest) {
        Optional<Role> optionalRole = roleRepository.findByName(Roles.USER);
        Set<Role> roles = new HashSet<>();
        roles.add(optionalRole.get());
        User user = User.builder()
                .email(registrationRequest.getEmail())
                .password(passwordEncoder.encode(registrationRequest.getPassword()))
                .roles(roles)
                .isVerified(false)
                .build();
        userRepository.save(user);

        // Gửi OTP đến email của người dùng
        String otpCode = generateOtpCode();

        // Lưu OTP vào cơ sở dữ liệu
        OTP otp = new OTP();
        otp.setConfirmationCode(otpCode);
        otp.setUser(user);
        otpRepository.save(otp);

        emailService.sendVerificationEmail(user, otpCode);
    }

    public void registerPartner(RegistrationPartnerRequest registrationRequest) {
        Optional<Role> optionalRole = roleRepository.findByName(Roles.PARTNER);
        Set<Role> roles = new HashSet<>();
        roles.add(optionalRole.get());
        User user = User.builder()
                .email(registrationRequest.getEmail())
                .password(passwordEncoder.encode(registrationRequest.getPassword()))
                .roles(roles)
                .isVerified(false)
                .build();
        userRepository.save(user);

        Hotel hotel = Hotel.builder()
                .name(registrationRequest.getHotelName())
                .email(registrationRequest.getEmail())
                .build();
        hotelRepository.save(hotel);
        // Gửi OTP đến email của người dùng
        String otpCode = generateOtpCode();

        // Lưu OTP vào cơ sở dữ liệu
        OTP otp = new OTP();
        otp.setConfirmationCode(otpCode);
        otp.setUser(user);
        otpRepository.save(otp);

        emailService.sendVerificationEmail(user, otpCode);
    }

    public List<UserResponse> getAll() {
        List<User> users = userRepository.findAll();
        if (!CollectionUtils.isEmpty(users)) {
            return users.stream().map(u -> objectMapper.convertValue(u, UserResponse.class)).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    public UserResponse getDetail(Long id) throws ClassNotFoundException {
        return userRepository.findById(id).map(u -> objectMapper.convertValue(u, UserResponse.class)).orElseThrow(ClassNotFoundException::new);
    }

    public JwtResponse refreshToken(RefreshTokenRequest request) throws RefreshTokenNotFoundException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        String newToken = userRepository.findById(userDetails.getId())
                .flatMap(user -> refreshTokenRepository.findByUserAndRefreshTokenAndInvalidated(user, request.getRefreshToken(), false)
                        .map(refreshToken -> {
                            LocalDateTime createdDateTime = refreshToken.getCreatedDateTime();
                            LocalDateTime expiryTime = createdDateTime.plusSeconds(refreshTokenValidityMilliseconds / 1000);
                            if (expiryTime.isBefore(LocalDateTime.now())) {
                                refreshToken.setInvalidated(true);
                                refreshTokenRepository.save(refreshToken);
                                return null;
                            }
                            return jwtUtils.generateJwtToken(authentication);
                        }))
                .orElseThrow(() -> new UsernameNotFoundException("Tài khoản không tồn tại"));


        if (newToken == null) {
            throw new RefreshTokenNotFoundException();
        }
        return JwtResponse.builder()
                .jwt(newToken)
                .build();
    }

    @Transactional
    public void logout() {
        Optional<Long> userIdOptional = SecurityUtils.getCurrentUserLoginId();
        if (userIdOptional.isEmpty()) {
            throw new UsernameNotFoundException("Tài khoản không tồn tại");
        }
        refreshTokenRepository.logOut(userIdOptional.get());
        SecurityContextHolder.clearContext();
    }

    @Transactional
    public void createUser(CreateUserRequest request) throws ExistedUserException {
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());
        if (!userOptional.isEmpty()) {
            throw new ExistedUserException();
        }

        Set<Role> roles = roleRepository.findByName(Roles.USER).stream().collect(Collectors.toSet());

        User user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode("123"))
                .roles(roles)
                .isVerified(false)
                .build();
        userRepository.save(user);

        // Gửi OTP đến email của người dùng
        String otpCode = generateOtpCode();
        // Lưu OTP vào cơ sở dữ liệu
        OTP otp = new OTP();
        otp.setConfirmationCode(otpCode);
        otp.setUser(user);

        otpRepository.save(otp);
        emailService.sendVerificationEmail(user, otpCode);
    }



    private String generateOtpCode() {
        UUID uuid = UUID.randomUUID();
        String code = uuid.toString().substring(0, 6).toUpperCase();
        return code;
    }

    public boolean verifyUser(Long id, String code) {
        Optional<OTP> otpOptional = otpRepository.findByUser_IdAndConfirmationCode(id, code);
        if (otpOptional.isPresent()) {
            OTP otp = otpOptional.get();
            User user = otp.getUser();

            // Xác thực thành công, cập nhật trạng thái của người dùng
            user.setVerified(true);
            userRepository.save(user);

            // Xóa mã OTP đã sử dụng
            otpRepository.delete(otp);

            return true; // Xác nhận thành công
        } else {
            return false; // Xác nhận không chính xác
        }
    }

    public void sendResetPasswordCode(EmailForgotPassRequest request) {
        User user = userRepository.findByEmail(request.getEmail()).
                orElseThrow(() -> new UserNotFoundException("Không tìm thấy email trong hệ thống"));

        // Gửi OTP đến email của người dùng
        String otpCode = generateOtpCode();

        // Lưu OTP vào cơ sở dữ liệu
        OTP otp = new OTP();
        otp.setConfirmationCode(otpCode);
        otp.setUser(user);
        otpRepository.save(otp);

        emailService.sendResetEmail(user, otpCode);
    }



    public void resetPassword(Long userId, String newPassword) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("Không tìm thấy email trong hệ thống"));

        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
    }

    public void sendOtp(String email) {
        emailService.sendSimpleMail(email);
    }

    public void sendAttachedMail(String email) throws MessagingException {
        emailService.sendMailWithAttachment(email);
    }

}
