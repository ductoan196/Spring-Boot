package com.example.hellojpa.repository;

import com.example.hellojpa.entity.User;
import com.fasterxml.jackson.databind.deser.impl.CreatorCandidate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    //Sử dụng method
    Optional<User> findByEmail(String email);

    //Sử dụng JPQL query
    @Query("select u from User u where  u.email =?1")
    Optional<User> findByEmailUsingJPQL(String email);

    @Query("select  u from User  u where u.email=:email")
    Optional<User> findByEmail2(@Param("email") String email);

    //Sử dụng Native Query
    @Query(nativeQuery = true, value = "select * from user u where u.email =?1")
    Optional<User> findByEmailUsingNativeQuery(String email);

    List<User> findByName(String name);

    List<User> findByNameContaining(String keyword);

    List<User> findByNameContainingIgnoreCase(String keyword);

    List<User> findByNameStartingWith(String prefix);

    Optional<User> findByNameAndEmail(String name, String email);

    long countByPhone(String phone);

    Boolean existsByEmail(String email);
//
//    List<User> findByBirthdayBefore(Date birthday);


}
