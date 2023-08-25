package com.example.travelbooking.service.user;

import com.example.travelbooking.entity.*;
import com.example.travelbooking.exception.*;
import com.example.travelbooking.model.request.registration.*;
import com.example.travelbooking.model.request.user.ChangePasswordRequest;
import com.example.travelbooking.model.request.user.UpdateUserRequest;
import com.example.travelbooking.repository.*;
import com.example.travelbooking.statics.UserStatus;
import com.fasterxml.jackson.databind.ObjectMapper;
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
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
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

    final FileService fileService;

    EmailService emailService;

    @Value("${application.security.refreshToken.tokenValidityMilliseconds}")
    long refreshTokenValidityMilliseconds;

    final JwtUtils jwtUtils;

    public UserService(PasswordEncoder passwordEncoder, UserRepository userRepository,
                       RoleRepository roleRepository, HotelRepository hotelRepository, OTPRepository otpRepository, ObjectMapper objectMapper,
                       RefreshTokenRepository refreshTokenRepository, FileService fileService, JwtUtils jwtUtils, EmailService emailService) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.hotelRepository = hotelRepository;
        this.otpRepository = otpRepository;
        this.objectMapper = objectMapper;
        this.refreshTokenRepository = refreshTokenRepository;
        this.fileService = fileService;
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

    public UserResponse getDetail(Long userId) throws ClassNotFoundException {
        User user= userRepository.findById(userId)
                .orElseThrow(ClassNotFoundException::new);
        return convertUserToUserResponse(user);
    }

    public JwtResponse refreshToken(RefreshTokenRequest request, HttpServletResponse response) throws RefreshTokenNotFoundException {
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

         JwtResponse jwtResponse = JwtResponse.builder()
                .jwt(newToken)
                .build();
        //Set lại cookie
        Cookie jwtCookie = new Cookie("jwtToken", jwtResponse.getJwt());
        jwtCookie.setPath("/");
        response.addCookie(jwtCookie);

         return jwtResponse;
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
            user.setUserStatus(UserStatus.ACTIVATED);
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

//    public void resetPassword(ResetPasswordRequest request) {
//
//        User user = userRepository.findById(request.getUserId())
//                .orElseThrow(() -> new UserNotFoundException("Không tìm thấy email trong hệ thống"));
//
//        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
//        userRepository.save(user);
//    }

    public void sendOtp(String email) {
        emailService.sendSimpleMail(email);
    }

    public void sendAttachedMail(String email) throws MessagingException {
        emailService.sendMailWithAttachment(email);
    }

    @Transactional
    public void getId() {
        Optional<Long> userIdOptional = SecurityUtils.getCurrentUserLoginId();
        if (userIdOptional.isEmpty()) {
            throw new UsernameNotFoundException("Tài khoản không tồn tại");
        }
        System.out.println(userIdOptional.get());
    }

    public UserResponse updateUser(UpdateUserRequest request) {
        User user = userRepository.findById(request.getId())
                .orElseThrow(() -> new UserNotFoundException("Không tìm thấy email trong hệ thống"));

        MultipartFile file = request.getAvatar();
        if (file != null && !file.isEmpty()) {
            String imgUrl = fileService.upload(file);
            Image image = new Image();
            image.setImageUrl(imgUrl);
            user.setAvatar(image);
        }
        user.setFullName(request.getFullName());
        user.setPhone(request.getPhone());
        user.setAddress(request.getAddress());
        user.setGender(request.getGender());

        userRepository.save(user);
        return convertUserToUserResponse(user);
    }

    private UserResponse convertUserToUserResponse(User user) {
        UserResponse userResponse = new UserResponse();

        String avatarUrl = user.getAvatar() != null ? user.getAvatar().getImageUrl() : null;
        userResponse.setId(user.getId());
        userResponse.setAvatar(avatarUrl);
        userResponse.setFullName(user.getFullName());
        userResponse.setGender(user.getGender());
        userResponse.setPhone(user.getPhone());
        userResponse.setEmail(user.getEmail());
        userResponse.setAddress(user.getAddress());

        return userResponse;
    }

    public void resentActiveEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy user"));
        // Gửi OTP đến email của người dùng
        String otpCode = generateOtpCode();

        // Lưu OTP vào cơ sở dữ liệu
        OTP otp = new OTP();
        otp.setConfirmationCode(otpCode);
        otp.setUser(user);
        otpRepository.save(otp);

        emailService.sendVerificationEmail(user, otpCode);
    }

    public void lockUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy user"));
        user.setUserStatus(UserStatus.BLOCKED);
        userRepository.save(user);
    }

    public boolean accountIsBlocked(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new NotFoundException("Không tìm thấy user"));
        return user.getUserStatus().equals(UserStatus.BLOCKED);
    }
}
