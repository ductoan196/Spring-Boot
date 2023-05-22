package com.example.librarymanagement.controller;

import com.example.librarymanagement.entity.Book;
import com.example.librarymanagement.model.BookModel;
import com.example.librarymanagement.model.BorrowModel;
import com.example.librarymanagement.model.ReaderModel;
import com.example.librarymanagement.service.BookService;
import com.example.librarymanagement.service.BorrowService;
import com.example.librarymanagement.service.ReaderService;
import com.example.librarymanagement.statics.Category;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("borrows")
public class BorrowController {

    private BorrowService borrowService;
    BookService bookService;
    ReaderService readerService;
    private void addOptionListsToModel(Model model) {
        List<BookModel> bookModels= bookService.getAllBook();
        List<ReaderModel> readerModels = readerService.getAllReader();
        model.addAttribute("dsSach", bookModels);
        model.addAttribute("dsBanDoc", readerModels);
    }

    @GetMapping
    public String getAllBorrow(Model model){
        List<BorrowModel> bookModels = borrowService.getAllBorrow();
        model.addAttribute("dsMuon", bookModels);
        return "borrow-list";
    }

    @GetMapping("creat-form")
    public String forwardToCreatForm(Model model, BorrowModel borrowModel){
        addOptionListsToModel(model);
        model.addAttribute("newBorrow", borrowModel);
        return "creat-borrow-book";
    }

    @PostMapping
    public String creatBorrow(@ModelAttribute("newBorrow") @Valid BorrowModel borrowModel, Errors errors, Model model) {
        if (null != errors && errors.getErrorCount() > 0) {
            addOptionListsToModel(model);
            return "creat-borow-book";
        } else {
            borrowService.creatBorrow(borrowModel);
            return "redirect:/borrows";
        }}

}

