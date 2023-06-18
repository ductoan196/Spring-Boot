package com.example.pet_shop_management.entity;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.apache.catalina.User;
import org.hibernate.metamodel.model.domain.IdentifiableDomainType;

import javax.persistence.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Integer id;

    @Lob
    @Column(name = "data", columnDefinition = "LONGBLOB")
    byte[] data;

    @ManyToOne
    @JoinColumn(name = "product_id")
    Product product;
}
