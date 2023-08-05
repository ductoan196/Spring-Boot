package com.example.travelbooking.repository;

import com.example.travelbooking.entity.location.District;
import com.example.travelbooking.entity.location.Ward;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WardRepository extends JpaRepository<Ward, String> {
    List<Ward> findByDistrict(District district);
}
