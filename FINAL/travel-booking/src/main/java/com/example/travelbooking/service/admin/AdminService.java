package com.example.travelbooking.service.admin;

import com.example.travelbooking.exception.NotFoundException;
import com.example.travelbooking.model.request.admin.HotelSearchRequest;
import com.example.travelbooking.model.response.admin.HotelSearchResponse;
import com.example.travelbooking.model.response.partner.CommonResponse;
import com.example.travelbooking.model.response.partner.RoomSearchResponse;
import com.example.travelbooking.repository.HotelRepository;
import com.example.travelbooking.repository.custom.HotelCustomRepository;
import com.example.travelbooking.service.user.PaginationUtils;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AdminService {
    HotelCustomRepository hotelCustomRepository;


    public CommonResponse<?> searchPartner(HotelSearchRequest request) {
        try {
            List<HotelSearchResponse> hotels = hotelCustomRepository.searchHotel(request);
            Integer pageIndex = request.getPageIndex();
            Integer pageSize = request.getPageSize();

            int pageNumber = (int) Math.ceil((float) hotels.size() / pageSize);

            PaginationUtils<HotelSearchResponse> paginationUtils = new PaginationUtils<>();
            hotels = paginationUtils.searchData(hotels, pageIndex, pageSize);

            return CommonResponse.builder()
                    .pageNumber(pageNumber)
                    .data(hotels)
                    .build();
        } catch (Exception e) {
            throw new NotFoundException("Page index out of bound");
        }
    }
}
