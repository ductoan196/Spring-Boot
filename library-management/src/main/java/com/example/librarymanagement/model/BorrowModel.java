package com.example.librarymanagement.model;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BorrowModel {
    int id;
    Integer idSach;
    String tenSach;
    Integer idBanDoc;
    String tenBanDoc;

    int quantity;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    LocalDate ngayMuon;
}
