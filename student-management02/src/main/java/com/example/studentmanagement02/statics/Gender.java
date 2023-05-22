package com.example.studentmanagement02.statics;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public enum Gender {
    MALE(1, "Nam"),
    FEMALE(2, "Nữ"),
    OTHER(3, "Other");

    public int id;
    public String name;

}
