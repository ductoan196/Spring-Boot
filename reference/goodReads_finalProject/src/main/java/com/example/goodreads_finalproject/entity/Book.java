package com.example.goodreads_finalproject.entity;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "books")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Book extends BaseEntity {
    String image;

    String title;

    @ManyToMany
    @JoinTable(name = "book_category",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    Set<Category> categories;

    String author;

    @Column(columnDefinition = "TEXT")
    String description;

    @Column(nullable = false, columnDefinition = "default 0")
    double rating;

    LocalDate published;

    String buyBook;

    //TODO: thêm số trang để cập nhật quá trình đọc sách
//    @Column(nullable = false, columnDefinition = "default 0")
//    Integer pages;
}
