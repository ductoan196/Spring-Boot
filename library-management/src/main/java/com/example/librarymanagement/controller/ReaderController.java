package com.example.librarymanagement.controller;

import com.example.librarymanagement.model.Reader;
import com.example.librarymanagement.service.ReaderService;
import com.example.librarymanagement.statics.ReaderType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("readers")
@AllArgsConstructor

public class ReaderController {

    ReaderService readerService;

    @GetMapping
    public String getAllReaders(Model model) {
        List<Reader> readers = readerService.getAllReader();
        model.addAttribute("readerList", readers);
        return "reader-list";
    }

    @GetMapping("/creat-form")
    public String forwardToCreatForm(Model model, Reader reader) {
        List<ReaderType> readerTypes = new ArrayList(Arrays.asList(ReaderType.values()));
        model.addAttribute("readerTypeList", readerTypes);

        model.addAttribute("newReader", reader);
        return "creat-reader";
    }

    @PostMapping
    public String creatReader(@ModelAttribute Reader reader) {
        readerService.creatReader(reader);
        return "redirect:/readers";
    }

    @GetMapping("{id}/delete")
    public String deleteReader(@PathVariable int id) {
        readerService.deleteReader(id);
        return "redirect:/readers";
    }

    @GetMapping("/{id}/edit")
    public String forwardtoEditForm(@PathVariable int id, Model model) {
        List<ReaderType> readerTypes = new ArrayList(Arrays.asList(ReaderType.values()));
        model.addAttribute("readerTypeList", readerTypes);

        Reader reader = readerService.findById(id);
        model.addAttribute("reader", reader);
        return "edit-reader";
    }

    @PostMapping("/update")
    public String updateReader(@ModelAttribute Reader reader) {
        readerService.updateReader(reader);
        return "redirect:/readers";
    }
}
