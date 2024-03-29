package com.example.goodreads_finalproject.controller;

import com.example.goodreads_finalproject.exception.OtpExpiredException;
import com.example.goodreads_finalproject.model.request.BookSearchRequest;
import com.example.goodreads_finalproject.model.response.BookResponse;
import com.example.goodreads_finalproject.model.response.CommonResponse;
import com.example.goodreads_finalproject.security.SecurityUtils;
import com.example.goodreads_finalproject.service.BookService;
import com.example.goodreads_finalproject.service.UserService;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;


@Controller
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class WebController {
    UserService userService;
    BookService bookService;

    @GetMapping
    public String getHomePage(Model model) {
        Optional<Long> optionalId = SecurityUtils.getCurrentUserLoginId();
        CommonResponse<?> bookResponses;
        if (optionalId.isEmpty()) {
            bookResponses = bookService.findRandomBooks(null);
        } else {
            bookResponses = bookService.findRandomBooks(optionalId.get());
        }
        model.addAttribute("randomBookList", bookResponses);
        return "user/index";
    }

    @GetMapping("/login")
    public String getLoginPage(Model model) {
        return "account/login";
    }

    @GetMapping("/signup")
    public String getSignUpPage(Model model) {
        return "account/signup";
    }

    @GetMapping("/home")
    public String getPage(Model model) {
        return "user/home";
    }

    @GetMapping("/actived")
    public String getActivePage(@RequestParam("otpCode") String otpCode) {
        userService.activeAccount(otpCode);
        return "user/active-account";
    }

    @GetMapping("/check-otp-reset")
    public String getResetPasswordPage(@RequestParam("otpCode") String otpCode) {
        try {
            userService.checkOtp(otpCode);
            return "account/reset-password";
        } catch (OtpExpiredException e) {
            return "account/login";
        }
    }

    @GetMapping("/books")
    public String searchBook(Model model, @Valid BookSearchRequest request) {
        Optional<Long> optionalId = SecurityUtils.getCurrentUserLoginId();
        CommonResponse<?> bookSearchData;
        if (optionalId.isEmpty()) {
            bookSearchData = bookService.searchBookAuthen(request,null);
        } else {
            bookSearchData = bookService.searchBookAuthen(request, optionalId.get());
        }
        model.addAttribute("bookSearchData", bookSearchData);
        model.addAttribute("currentPage", request.getPageIndex());
        return "user/book-list";
    }

    @GetMapping("/books/{bookId}")
    public String getBookDetail(Model model, @PathVariable Long bookId) {
        Optional<Long> optionalId = SecurityUtils.getCurrentUserLoginId();
        BookResponse bookResponse;
        if (optionalId.isPresent()) {
            bookResponse = bookService.findBookByBookId(bookId, optionalId.get());
        } else {
            bookResponse = bookService.findBookByBookId(bookId, null);
        }
        model.addAttribute("bookDetail", bookResponse);
        return "user/book-detail";
    }
}
