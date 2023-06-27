package com.example.techmaster_admin_code.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "supporter")
public class Supporter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    Integer id;

    @Column(name = "name", nullable = false)
    String name;

    @Column(name = "email", nullable = false)
    String email;

    @Column(name = "phone", nullable = false)
    String phone;

    @Column(name = "avatar", nullable = false)
    String avatar;

}
