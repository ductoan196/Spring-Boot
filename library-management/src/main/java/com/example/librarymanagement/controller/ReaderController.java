package com.example.librarymanagement.controller;

import com.example.librarymanagement.model.ReaderModel;
import com.example.librarymanagement.service.ReaderService;
import com.example.librarymanagement.statics.ReaderType;
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
@RequestMapping("readers")
@AllArgsConstructor

public class ReaderController {

    ReaderService readerService;

    private void addOptionListsToModel(Model model) {
        List<ReaderType> readerTypes= new ArrayList(Arrays.asList(ReaderType.values()));
        model.addAttribute("readerTypeList", readerTypes);
    }

    @GetMapping
    public String getAllReaders(Model model) {
        List<ReaderModel> readerModels = readerService.getAllReader();
        model.addAttribute("readerList", readerModels);
        return "reader-list";
    }

    @GetMapping("/creat-form")
    public String forwardToCreatForm(Model model, ReaderModel readerModel) {
        addOptionListsToModel(model);

        model.addAttribute("newReader", readerModel);
        return "creat-reader";
    }

    @PostMapping
    public String creatReader(@ModelAttribute("newReader") @Valid ReaderModel readerModel, Errors errors, Model model) {
        if (null != errors && errors.getErrorCount() > 0) {
            addOptionListsToModel(model);
            return "creat-reader";
        } else {
            readerService.creatReader(readerModel);
            return "redirect:/readers";
        }
    }

    @GetMapping("{id}/delete")
    public String deleteReader(@PathVariable int id) {
        readerService.deleteReader(id);
        return "redirect:/readers";
    }

    @GetMapping("/{id}/edit")
    public String forwardtoEditForm(@PathVariable int id, Model model) {
        addOptionListsToModel(model);

        ReaderModel readerModel = readerService.findById(id);
        model.addAttribute("nguoiDocCanEdit", readerModel);
        return "edit-reader";
    }

    @PostMapping("/update")
    public String updateReader(@ModelAttribute("nguoiDocCanEdit") @Valid ReaderModel readerModel, Errors errors, Model model) {
        if (null != errors && errors.getErrorCount() > 0) {
            addOptionListsToModel(model);
            return "edit-reader";
        } else {
            readerService.updateReader(readerModel);
            return "redirect:/readers";
        }
    }
}
