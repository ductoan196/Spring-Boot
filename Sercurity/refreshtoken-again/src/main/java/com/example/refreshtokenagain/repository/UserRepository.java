package com.example.refreshtokenagain.repository;

import com.example.refreshtokenagain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
