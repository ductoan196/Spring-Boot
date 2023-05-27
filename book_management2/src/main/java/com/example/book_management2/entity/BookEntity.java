package com.example.book_management2.entity;

import com.example.homework_book_managerment.statics.Specialized;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookEntity {
    int id;
    String title;
    String author;
    Specialized specialized;
    String publishDate;

}
