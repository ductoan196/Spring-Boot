package com.example.studentmanagement02.statics;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public enum Level {
    GIAO_SU(1, "Giáo sư"),
    TIEN_SI(2, "Tiến sĩ"),
    THAC_SI(3, "Thạc sĩ");

    private int id;
    private String name;
}
