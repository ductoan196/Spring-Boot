package com.example.hellojpa.entity;

import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import jdk.jfr.Category;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.Type;

import java.util.List;
import java.util.Locale;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Blog")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(name = "title", unique = false, columnDefinition = "varchar(255)")
    String title;

    @Column(name = "description", columnDefinition = "TEXT")
    String description;

    @Column(name = "content", columnDefinition = "TEXT")
    String content;

    @Column(name = "thumbnail", columnDefinition = "TEXT")
    String thumbnail;

    @Column(name = "categories", columnDefinition = "json")
    @Type(JsonType.class)
    List<Category> category;

    @Column(name = "author_name",columnDefinition = "VARCHAR(50)")
    String author;
}
