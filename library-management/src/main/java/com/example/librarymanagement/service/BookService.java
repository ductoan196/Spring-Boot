package com.example.librarymanagement.service;

import com.example.librarymanagement.entity.Book;
import com.example.librarymanagement.model.BookModel;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE,makeFinal = true)
public class BookService {
    private final List<Book> books = new ArrayList<>();
    public static int AUTO_ID = 10000;
    ObjectMapper objectMapper;

    public List<BookModel> getAllBook() {
        List<BookModel> result = new ArrayList<>();
        for (int i = 0; i < books.size(); i++) {
            Book book = books.get(i);
            result.add(objectMapper.convertValue(book, BookModel.class));
        }
        return result;
    }

    public void creatBook(BookModel bookModel) {
        bookModel.setId(AUTO_ID);
        AUTO_ID++;
        books.add(objectMapper.convertValue(bookModel,Book.class));
    }

    public void delete(int id) {
        books.removeIf(s -> s.getId() == id);
    }

//    public BookModel findById(int id) {
//        Book book = books
//                .stream()
//                .filter(s -> s.getId() == id)
//                .findFirst()
//                .get();
//
//        return objectMapper.convertValue(book, BookModel.class);
//    }
    public BookModel findById(int id) {
        Optional<Book> bookOptional = books
                .stream()
                .filter(s-> s.getId() == id)
                .findFirst();
        if (bookOptional.isEmpty()) {
            return null;
        }

        Book book = bookOptional.get();
        return objectMapper.convertValue(book, BookModel.class);
    }

    public Book findBookEntityByID(int id) {
        BookModel bookModel = findById(id);
        return objectMapper.convertValue(bookModel, Book.class);
    }

    public void updateBook(BookModel bookModel) {
        books.forEach(book->{
            if (book.getId() != bookModel.getId()) {
                return;
            }
            book.setTitle(bookModel.getTitle());
            book.setAuthor(bookModel.getAuthor());
            book.setCategory(bookModel.getCategory());
            book.setYearOfPublish(bookModel.getYearOfPublish());
        });
    };

}
