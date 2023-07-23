package com.example.travelbooking.statics;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum VoucherType {
    PERCENTAGE("Percentage"),
    AMOUNT("Amount");

    private String name;
}
