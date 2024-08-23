package com.coding.crud_spring.exception;

public class InsufficientDaysException extends RuntimeException {
    public InsufficientDaysException(String message) {
        super(message);
    }
}
