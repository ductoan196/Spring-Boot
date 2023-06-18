package com.example.relationship_jpa_code_again.repository;

import com.example.relationship_jpa_code_again.entity.IdentityCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IdentityCardRepository extends JpaRepository<IdentityCard, Integer> {
}
