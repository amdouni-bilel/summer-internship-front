package com.coding.crud_spring.controller;

import com.coding.crud_spring.entity.ChatMessage;
import com.coding.crud_spring.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/chat")
public class ChatController {
    private final SimpMessagingTemplate messagingTemplate;

    public ChatController(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }
    @Autowired
    private ChatService chatService;

    @PostMapping("/send")
    /*public ChatMessage sendMessage(@RequestBody ChatMessage chatMessage) {
        chatMessage.setTimestamp(LocalDateTime.now());
        return chatService.saveMessage(chatMessage);
    }*/
    @MessageMapping("/chat.sendMessage")
    public void sendMessage1(ChatMessage chatMessage) {
        String destination = "/queue/messages/" + chatMessage.getRecipient();
        messagingTemplate.convertAndSend(destination, chatMessage);
    }
    @GetMapping("/history/{user1}/{user2}")
    public List<ChatMessage> getChatHistory(@PathVariable String user1, @PathVariable String user2) {
        return chatService.getChatHistory(user1, user2);
    }
/*    @MessageMapping("/sendMessage")
    public void sendMessage(@Payload ChatMessage chatMessage) {
        // Envoi du message au destinataire
        messagingTemplate.convertAndSendToUser(
                chatMessage.getRecipient(), "/queue/messages", chatMessage);
    }*/
}

