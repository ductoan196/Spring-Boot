package com.example.travelbooking.exception;

public class NotEnoughRoomsAvailableException extends RuntimeException{
    public NotEnoughRoomsAvailableException(String message) {
        super(message);
    }
}
