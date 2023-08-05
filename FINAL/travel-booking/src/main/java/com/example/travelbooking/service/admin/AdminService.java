package com.example.travelbooking.service.admin;

import com.example.travelbooking.model.request.admin.PartnerSearchRequest;
import com.example.travelbooking.model.response.partner.CommonResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AdminService {
    public CommonResponse<?> searchPartner(PartnerSearchRequest request) {
        return null;
    }
}
