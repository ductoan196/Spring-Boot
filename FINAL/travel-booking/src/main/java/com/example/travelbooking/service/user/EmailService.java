package com.example.travelbooking.service.user;

import com.example.travelbooking.entity.User;
import com.example.travelbooking.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Slf4j
@Service
public class EmailService {

    private final JavaMailSender javaMailSender;

    @Autowired
    UserRepository userRepository;

    @Value("${spring.mail.username}")
    private String sender;

    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendSimpleMail(String receiver) {
        // Creating a simple mail message
        SimpleMailMessage mailMessage = new SimpleMailMessage();

        // Setting up necessary details
        mailMessage.setFrom(sender);
        mailMessage.setTo(receiver);
        mailMessage.setText("Mã OTP của bạn là: 123456.\n\n Không chia sẻ mã này cho bất kỳ ai!");
        mailMessage.setSubject("[Techmaster] OTP Vefification");

        // Sending the mail
        javaMailSender.send(mailMessage);
    }

    public void sendMailWithAttachment(String receiver) throws MessagingException {
        // Creating a mime message
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper;

        // Setting multipart as true for attachments to
        // be send
        mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
        mimeMessageHelper.setFrom(sender);
        mimeMessageHelper.setTo(receiver);
        mimeMessageHelper.setText("Email có đính kèm file");
        mimeMessageHelper.setSubject("[DEMO MAIL] Gửi mail kèm file");

        // Adding the attachment
        FileSystemResource file = new FileSystemResource(new File("C:/Users/admin/Pictures/310411920_820765762479082_1662419534054506511_n.jpg"));
        mimeMessageHelper.addAttachment(file.getFilename(), file);

        // Sending the mail
        javaMailSender.send(mimeMessage);
    }

    public void sendVerificationEmail(User user, String otpCode) {
//        SimpleMailMessage mailMessage = new SimpleMailMessage();
//
//
//        // Tạo đường dẫn xác nhận
//        String confirmationLink = "http://localhost:8080/api/v1/authentication/verify?id=" + user.getId() + "&code=" + otpCode;
//
//        mailMessage.setFrom(sender);
//        mailMessage.setTo(user.getEmail());
//        mailMessage.setSubject("Xác nhận đăng ký");
//        mailMessage.setText("Vui lòng ấn vào liên kết sau để xác nhận đăng ký:" + confirmationLink);
//
//        javaMailSender.send(mailMessage);

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");

        // Tạo đường dẫn xác nhận
        String confirmationLink = "http://localhost:8080/api/v1/authentication/verify?id=" + user.getId() + "&code=" + otpCode;

        // Nội dung email sẽ là HTML
        String emailContent = "<p>Vui lòng ấn vào <a href='" + confirmationLink + "'>Tại đây</a> để xác nhận đăng ký.</p>";

        try {
            helper.setFrom(sender);
            helper.setTo(user.getEmail());
            helper.setSubject("Xác nhận đăng ký");
            helper.setText(emailContent, true); // Đặt true để đánh dấu emailContent là HTML
            javaMailSender.send(mimeMessage);
        } catch (MessagingException e) {
            throw new RuntimeException("Lỗi gửi email: " + e.getMessage());
        }
    }

    public void sendResetEmail(User user, String otpCode) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();

        // Tạo đường dẫn xác nhận
        String resetPassLink = "http://localhost:8080/api/v1/authentication/reset-password/verify?id=" + user.getId() + "&code=" + otpCode;

        mailMessage.setFrom(sender);
        mailMessage.setTo(user.getEmail());
        mailMessage.setSubject("Xác nhận lấy lại mật khẩu");
        mailMessage.setText("Vui lòng ấn vào liên kết sau để reset password:" + resetPassLink);

        try {
            // Gửi email
            javaMailSender.send(mailMessage);
        } catch (Exception e) {
            // Ném một exception tùy chỉnh khi gửi email thất bại
            throw new RuntimeException("Lỗi gửi email reset password: " + e.getMessage());
        }
    }


}
