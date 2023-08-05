package com.example.travelbooking.service;

import com.example.travelbooking.entity.location.District;
import com.example.travelbooking.entity.location.Province;
import com.example.travelbooking.entity.location.Ward;
import com.example.travelbooking.repository.DistrictRepository;
import com.example.travelbooking.repository.ProvinceRepository;
import com.example.travelbooking.repository.WardRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AddressService {

    ProvinceRepository provinceRepository;
    DistrictRepository districtRepository;
    WardRepository wardRepository;
    public List<District> getDistrictsByProvince(String provinceName) {
        Province province = provinceRepository.findByNameEn(provinceName);
         List<District> districtList = districtRepository.findByProvince(province);
         return districtList;
    }

    public List<Ward> getWardsByDistrict(String districtCode) {
        District district = districtRepository.findByCode(districtCode);
        List<Ward> wardList = wardRepository.findByDistrict(district);
        return wardList;
    }
}
