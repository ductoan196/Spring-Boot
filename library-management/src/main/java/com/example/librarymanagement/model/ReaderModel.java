package com.example.librarymanagement.model;

import com.example.librarymanagement.statics.ReaderType;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ReaderModel {
    int id;

    @NotBlank(message = "Book title cannot be blank")
    @Size(max = 100, message = "Book title cannot be over 100 characters")
    String name;

    @NotBlank(message = "Book title cannot be blank")
    @Size(max = 100, message = "Book title cannot be over 100 characters")
    String address;

    @NotBlank(message = "User phone cannot be blank")
    @Pattern(regexp = "\\d{10}", message = "Phone must be 10 number characters")
    String phone;

    ReaderType readerType;
}
