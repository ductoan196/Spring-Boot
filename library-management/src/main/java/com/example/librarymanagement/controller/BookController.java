package com.example.librarymanagement.controller;

import com.example.librarymanagement.model.BookModel;
import com.example.librarymanagement.service.BookService;
import com.example.librarymanagement.statics.Category;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("books")
@AllArgsConstructor
public class BookController {

    BookService bookService;

    private void addOptionListsToModel(Model model) {
        List<Category> categories= new ArrayList(Arrays.asList(Category.values()));
        model.addAttribute("bookCategoryList", categories);
    }

    @GetMapping
    public String getAllBook(Model model){
        List<BookModel> bookModels = bookService.getAllBook();
        model.addAttribute("bookList", bookModels);
        return "book-list";
    }

    @GetMapping("creat-form")
    public String forwardToCreatForm(Model model, BookModel bookModel){
        addOptionListsToModel(model);

        model.addAttribute("newBook", bookModel);
        return "creat-book";
    }

    @PostMapping
    public String creatBook(@ModelAttribute("newBook") @Valid BookModel bookModel, Errors errors, Model model) {
        if (null != errors && errors.getErrorCount() > 0) {
            addOptionListsToModel(model);
            return "creat-book";
        } else {
        bookService.creatBook(bookModel);
        return "redirect:/books";
    }}

    @GetMapping("/{id}/delete")
    public String deleteBook(@PathVariable int id){
        bookService.delete(id);
        return "redirect:/books";
    }

    @GetMapping("/{id}/edit")
    public String forwardToEditForm(@PathVariable int id, Model model){
        addOptionListsToModel(model);

        BookModel bookModel = bookService.findById(id);
        model.addAttribute("book", bookModel);
        return "edit-book";
    }


    @PostMapping("/update")
    public String updateStudent(@ModelAttribute("updatedBook") @Valid BookModel bookModel, Errors errors, Model model){
        if (null != errors && errors.getErrorCount() > 0) {
            addOptionListsToModel(model);
            return "edit-book";
        } else {
            bookService.updateBook(bookModel);
            return "redirect:/books";
        }
    }
}
