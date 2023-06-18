package com.example.demojparelationship.entity;

import lombok.*;

import javax.persistence.*;

@Data
@Builder
@Entity
@Table(name = "identity_card")
@NoArgsConstructor
@AllArgsConstructor
public class IdentityCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "code")
    private String code;

//    @OneToOne(mappedBy = "identityCard")
//    private User user;


}