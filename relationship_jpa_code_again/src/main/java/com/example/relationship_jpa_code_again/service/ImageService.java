package com.example.relationship_jpa_code_again.service;

import com.example.relationship_jpa_code_again.entity.Image;
import com.example.relationship_jpa_code_again.entity.User;
import com.example.relationship_jpa_code_again.repository.ImageRepository;
import com.example.relationship_jpa_code_again.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
@Service
@AllArgsConstructor
public class ImageService {
    private final ImageRepository imageRepository;
    private final UserRepository userRepository;

    public List<Image> getImageOfUser(Integer id) {
        return imageRepository.findByUser_Id(id);
    }

    public Image uploadImage(Integer id, MultipartFile file) {
        User user = userRepository.findById(id)
                .orElseThrow(() ->{
                            throw new RuntimeException("Không tìm thấy User id");}
                        );
        //Validate file
        //Kiểm tra tên
        //Kiểm tra đuôi file
        //kiểm tra Size file (tối đa 2MB)

        //Save image
        try {
            Image image = Image.builder()
                    .type(file.getContentType())
                    .data(file.getBytes())
                    .user(user)
                    .build();
            imageRepository.save(image);
            return image;
        } catch (IOException e) {
            throw new RuntimeException(e.getMessage()
            );
        }
    }

    public Image getImageById(Integer id) {
        return imageRepository.findById(id)
                .orElseThrow(() ->{
            throw new RuntimeException("Không tìm thấy User id");}
        );
    }

    public void deleteImage(Integer id) {
        Image image = imageRepository.findById(id)
                .orElseThrow(() -> {
                    throw new RuntimeException("Không tìm thấy User id");
                });
        imageRepository.delete(image);
    }
}
