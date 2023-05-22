package com.example.studentmanagement02.statics;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public enum Specialize {
    KHOA_HOC_TU_NHIEN(1, "Khoa học tự nhiên"),
    KHOA_HOC_XA_HOI(2, "Khoa học xã hội");

    private int id;
    private String name;
}
