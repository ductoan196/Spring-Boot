package com.example.librarymanagement.statics;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public enum ReaderType {
    SINH_VIEN(1,"Sinh Viên"),
    HOC_VIEN_CAO_HOC(2,"Học Viên Cao Học"),
    GIAO_VIEN(3, "Giáo Viên");

    public int id;
    public String name;
}
