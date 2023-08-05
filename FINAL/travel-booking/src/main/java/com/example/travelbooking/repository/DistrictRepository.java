package com.example.travelbooking.repository;


import com.example.travelbooking.entity.location.District;
import com.example.travelbooking.entity.location.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DistrictRepository extends JpaRepository<District, String> {
    List<District> findByProvince(Province province);

    @Query("select d from District d where d.code = :districtCode")
    District findByCode(String districtCode);
}
