package com.example.librarymanagement.statics;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter

public enum Category {
    KHOA_HOC_TU_NHIEN(1, "Khoa học tự nhiên"),
    VAN_HOC_NGHE_THUAT(2,"Văn học nghệ thuật"),
    DIEN_TU_VIEN_THONG(3, "Điện tử viễn thông"),
    CONG_NGHE_THONG_TIN(4, "Công nghệ thông tin");

    public int id;

    public String name;

}
