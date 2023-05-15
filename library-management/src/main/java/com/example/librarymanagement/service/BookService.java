package com.example.librarymanagement.service;

import com.example.librarymanagement.model.Book;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {
    private final List<Book> books = new ArrayList<>();
    public static int AUTO_ID = 10000;

    public List<Book> getAllBook() {
        return books;
    }

    public void creatBook(Book book) {
        book.setId(AUTO_ID);
        AUTO_ID++;
        books.add(book);
    }

    public void delete(int id) {
        books.removeIf(book -> book.getId() == id);
    }

    public Book findById(int id) {
        return books
                .stream()
                .filter(book -> book.getId() == id)
                .findFirst()
                .get();
    }

    public void updateBook(Book book) {
        Book book1 = findById(book.getId());
        book1.setTitle(book.getTitle());
        book1.setAuthor(book.getAuthor());
        book1.setCategory(book.getCategory());
        book1.setYearOfPublish(book.getYearOfPublish());
    }

}
