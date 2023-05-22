package com.example.librarymanagement.model;

import com.example.librarymanagement.statics.Category;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.*;
import java.time.Year;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookModel {
    int id;

    @NotBlank(message = "Book title cannot be blank")
    @Size(max = 100, message = "Book title cannot be over 100 characters")
    String title;

    @NotBlank(message = "Book author cannot be blank")
    @Size(max = 100, message = "Book author cannot be over 100 characters")
    String author;

    Category category;

    @NotNull(message = "Book Publish year cannot be null")
    @Max(value = 2023, message = "Book Publish year should be between 2000-2023")
    @Min(value = 2000, message = "Book Publish year should be between 2000-2023")
    int yearOfPublish;

}
