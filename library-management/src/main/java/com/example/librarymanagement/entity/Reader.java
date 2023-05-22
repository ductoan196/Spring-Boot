package com.example.librarymanagement.entity;

import com.example.librarymanagement.statics.ReaderType;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Reader {
    int id;


    String name;
    String address;
    String phone;
    ReaderType readerType;
}