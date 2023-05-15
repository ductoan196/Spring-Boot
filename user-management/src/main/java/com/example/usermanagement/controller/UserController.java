package com.example.usermanagement.controller;

import com.example.usermanagement.model.User;
import com.example.usermanagement.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/users")
public class UserController {

    UserService userService;

    @GetMapping
    public String getUser(Model model) {
        List<User> users = userService.getAllUser();
        model.addAttribute("userList", users);
        return "user-list";
    }

    @GetMapping("/creat-form")
    public String forwardtoCreatUserForm(Model model, User user) {
        model.addAttribute("newUser", user);
        return "creat-user";
    }

    @PostMapping
    public String creatNewUser(@ModelAttribute("user") User user) {
        userService.saveUser(user);
        return "redirect:/users";
    }

    @GetMapping("{id}/delete")
    public String deleteUser(@PathVariable("id") String id, Model model) {
        userService.delete(id);
        return "redirect:/users";
    }

    @GetMapping("{id}/edit")
    public String forwardEditForm(@PathVariable("id") String id, Model model) {
        User user = userService.findById(id);
        model.addAttribute("userToiMuonCapNhat", user);
        return "redirect:/users";
    }

    @PostMapping("/update")
    public String updateUser(@ModelAttribute("user") User user) {
        userService.updateUser(user);
        return "redirect:/users";
    }
}
