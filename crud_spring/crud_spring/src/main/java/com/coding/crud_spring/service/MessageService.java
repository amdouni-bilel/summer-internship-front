package com.coding.crud_spring.service;


import com.coding.crud_spring.entity.Message;
import com.coding.crud_spring.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getMessageHistory(String currentUser, String selectedUser) {
        List<Message> messages = new ArrayList<>();
        messages.addAll(messageRepository.findBySenderAndRecipientOrderByTimestampAsc(currentUser, selectedUser));
        messages.addAll(messageRepository.findByRecipientAndSenderOrderByTimestampAsc(currentUser, selectedUser));

        // Trie des messages par timestamp pour les combiner correctement
        messages.sort((m1, m2) -> m1.getTimestamp().compareTo(m2.getTimestamp()));

        return messages;
    }


    public Message sendMessage(String content, String sender, String recipient) {
        Message message = new Message(content, sender, recipient, LocalDateTime.now());
        return messageRepository.save(message);
    }
}

