package com.coding.crud_spring.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@Entity
public class Message {

    // Getters and Setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private String sender;

    @Column(nullable = false)
    private String recipient;

    @Column(nullable = false)
    private LocalDateTime timestamp;

    // Constructors, getters, and setters
    public Message() {
    }

    public Message(String content, String sender, String recipient, LocalDateTime timestamp) {
        this.content = content;
        this.sender = sender;
        this.recipient = recipient;
        this.timestamp = timestamp;
    }

}
