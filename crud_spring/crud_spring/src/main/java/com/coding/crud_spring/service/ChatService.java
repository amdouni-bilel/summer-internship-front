package com.coding.crud_spring.service;

import com.coding.crud_spring.entity.ChatMessage;
import com.coding.crud_spring.repository.ChatMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    public List<ChatMessage> getChatHistory(String user1, String user2) {
        List<ChatMessage> chatHistory = chatMessageRepository.findBySenderAndRecipientOrderByTimestampAsc(user1, user2);
        chatHistory.addAll(chatMessageRepository.findByRecipientAndSenderOrderByTimestampAsc(user1, user2));
        chatHistory.sort((m1, m2) -> m1.getTimestamp().compareTo(m2.getTimestamp()));
        return chatHistory;
    }

    public ChatMessage saveMessage(ChatMessage message) {
        return chatMessageRepository.save(message);
    }
}

