package com.example.hellojpa.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;


    @Column(name = "full_name")
    private String name;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "phone", length = 11)
    private String phone;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "birthday")
    private Date birthday;


}
