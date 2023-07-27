package com.example.travelbooking.repository;

import com.example.travelbooking.entity.Facility;
import com.example.travelbooking.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FacilityRepository extends JpaRepository<Facility, Long> {
    Optional<Facility> findByName(String name);
}
