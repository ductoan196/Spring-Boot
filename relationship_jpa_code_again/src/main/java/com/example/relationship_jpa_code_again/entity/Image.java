package com.example.relationship_jpa_code_again.entity;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import javax.print.attribute.standard.MediaSize;
import java.time.LocalDateTime;

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
    Integer id;

    @Column(name = "type")
    String type;

    @Lob
    @Column(name = "data", columnDefinition = "LONGBLOB")
    byte[] data;

    @Column(name = "created_at")
    LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }

}
