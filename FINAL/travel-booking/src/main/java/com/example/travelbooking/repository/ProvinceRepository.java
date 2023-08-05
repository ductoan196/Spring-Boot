package com.example.travelbooking.repository;


import com.example.travelbooking.entity.location.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProvinceRepository extends JpaRepository<Province, String> {
    @Query("select p from Province p where p.name_en = :provinceName")
    Province findByNameEn(String provinceName);
}
