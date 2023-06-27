package com.example.techmaster_admin_code.repository;

import com.example.techmaster_admin_code.model.Supporter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupporterRepository extends JpaRepository<Supporter, Integer> {
}
