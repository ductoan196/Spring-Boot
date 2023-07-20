package com.example.travelbooking.repository;


import com.example.travelbooking.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Long> {
}
