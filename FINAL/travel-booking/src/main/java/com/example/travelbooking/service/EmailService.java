package com.example.travelbooking.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Service
public class EmailService {

    private final JavaMailSender javaMailSender;

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

    public void sendVerificationEmail(String email, String otpCode) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();

        // Tạo đường dẫn xác nhận
        String confirmationLink = "http://localhost:8080/api/v1/authentication/verify?email=" + email + "&code=" + otpCode;

        mailMessage.setFrom(sender);
        mailMessage.setTo(email);
        mailMessage.setSubject("Xác nhận đăng ký");
        mailMessage.setText("Vui lòng ấn vào liên kết sau để xác nhận đăng ký:" + confirmationLink);

        javaMailSender.send(mailMessage);
    }
}
