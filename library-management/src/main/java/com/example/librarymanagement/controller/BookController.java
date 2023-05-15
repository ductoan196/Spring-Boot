package com.example.librarymanagement.controller;

import com.example.librarymanagement.dto.CategoryDto;
import com.example.librarymanagement.model.Book;
import com.example.librarymanagement.service.BookService;
import com.example.librarymanagement.statics.Category;
import lombok.AllArgsConstructor;
import org.springframework.boot.Banner;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("books")
@AllArgsConstructor
public class BookController {

    BookService bookService;

    @GetMapping
    public String getAllBook(Model model){
        List<Book> books = bookService.getAllBook();
        model.addAttribute("bookList", books);
        return "book-list";
    }

    @GetMapping("creat-form")
    public String forwardToCreatForm(Model model, Book book){
        List<Category> categories= new ArrayList(Arrays.asList(Category.values()));
        model.addAttribute("bookCategoryList", categories);

        model.addAttribute("newBook", book);
        return "creat-book";
    }

    @PostMapping
    public String creatBook(@ModelAttribute Book book){
        bookService.creatBook(book);
        return "redirect:/books";
    }

    @GetMapping("/{id}/delete")
    public String deleteBook(@PathVariable int id){
        bookService.delete(id);
        return "redirect:/books";
    }

    @GetMapping("/{id}/edit")
    public String forwardToEditForm(@PathVariable int id, Model model){
        List<Category> categories= new ArrayList(Arrays.asList(Category.values()));
        model.addAttribute("bookCategoryList", categories);

        Book book = bookService.findById(id);
        model.addAttribute("book", book);
        return "edit-book";
    }


    @PostMapping("/update")
    public String updateStudent(@ModelAttribute("book") Book book){

        bookService.updateBook(book);
        return "redirect:/books";
    }
}
