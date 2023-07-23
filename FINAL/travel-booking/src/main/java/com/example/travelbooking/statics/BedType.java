package com.example.travelbooking.statics;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum BedType {
    SINGLE("Single"),
    DOUBLE("Double"),
    KING("King"),
    QUEEN("Queen");

    public String name;
}
