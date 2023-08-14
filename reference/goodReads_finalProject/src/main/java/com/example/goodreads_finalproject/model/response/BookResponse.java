package com.example.goodreads_finalproject.model.response;

import com.example.goodreads_finalproject.entity.Category;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import java.time.LocalDate;
import java.util.Set;

@Data
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookResponse {

    String image;

    String title;

    Set<Category> categories;

    String author;

    String description;

    double rating;

    LocalDate published;

    String buyBook;

}