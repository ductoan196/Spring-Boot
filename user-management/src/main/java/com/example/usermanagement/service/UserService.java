package com.example.usermanagement.service;

import com.example.usermanagement.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private final List<User> users = new ArrayList<>();


    public void creatTeacherList(){
        for (int i = 0; i < 5; i++) {
            User user = User.builder()
                    .id(i)
                    .userName("Trần Thị " + i)
                    .phone("Phone" + i)
                    .password("Pass" + i)
                    .build();
            users.add(user);
        }
    }

    public List<User> getAllUser() {
        creatTeacherList();
        return users;
    }

    public void saveUser(User user) {

        users.add(user);
    }

    public void updateUser(User user) {
        users.forEach(s ->{
            if (s.getId() !=user.getId()){
                return;
            }
            s.setUserName(user.getUserName());
            s.setPassword(user.getPassword());
            s.setEmail(user.getEmail());
            s.setPhone(user.getPhone());
                }
                );
    }

    public User findById(String id) {
        return users
                .stream()
                .filter(s -> s.getId() == Integer.parseInt(id))
                .findFirst()
                .get();
    }

    public void delete(String id) {
        users.removeIf(s -> s.getId()== Integer.parseInt(id));
    }
}
