package com.example.librarymanagement.entity;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Borrow {
    int id;
    Book book;
    Reader reader;

    int quantity;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    LocalDate ngayMuon;
}
