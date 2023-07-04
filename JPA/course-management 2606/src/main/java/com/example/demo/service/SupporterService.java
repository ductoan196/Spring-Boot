package com.example.demo.service;

import com.example.demo.entity.Supporter;
import com.example.demo.exception.NotFoundException;
import com.example.demo.model.request.CreateSupporterRequest;
import com.example.demo.model.request.UpdateSupporterRequest;
import com.example.demo.repository.SupporterRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SupporterService {
    private final SupporterRepository supporterRepository;

    public List<Supporter> getAllSupporter() {
        return supporterRepository.findAll();
    }

    public Page<Supporter> getAllSupporter(Integer page, Integer pageSize) {
        Pageable pageRequest = PageRequest.of(page-1, pageSize);
        return supporterRepository.findAll(pageRequest);
    }

    public Supporter createSupporter(CreateSupporterRequest supporterRequest) {
        Supporter supporter = Supporter.builder()
                .name(supporterRequest.getName())
                .email(supporterRequest.getEmail())
                .phone(supporterRequest.getPhone())
                .build();

        supporterRepository.save(supporter);
        System.out.println(supporterRepository.findAll());
        return supporter;
    }

    public Supporter updateSupporter(Integer id, UpdateSupporterRequest supporterRequest) {
        Supporter supporter = supporterRepository.findById(id)
                .orElseThrow(() -> {
                    throw new NotFoundException("Not found supporter with id = " + id);
                });
        supporter.setName(supporterRequest.getName());
        supporter.setAvatar(supporter.getAvatar());
        supporter.setPhone(supporter.getPhone());
        supporterRepository.save(supporter);
        return supporter;
    }

    public Supporter findById(Integer id) {
        Supporter supporter= supporterRepository.findById(id)
                .orElseThrow(() -> {
                    throw new NotFoundException("Not found supporter with id = " + id);
                });

        return supporter;
    }

    public void deleteById(Integer id) {
        supporterRepository.deleteById(id);
    }

    public Supporter getSupporterById(Integer id) {
        return supporterRepository.findById(id)
                .orElseThrow(() -> {
                    throw new NotFoundException("Not found supporter with id = " + id);
                });
    }
}
