package com.coding.crud_spring.controller;

import com.coding.crud_spring.entity.Message;
import com.coding.crud_spring.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;
    private final SimpMessagingTemplate messagingTemplate;

    public MessageController(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @GetMapping("/history/{selectedUser}")
    public List<Message> getMessageHistory(
            @RequestParam String currentUser,
            @PathVariable String selectedUser) {
        return messageService.getMessageHistory(currentUser, selectedUser);
    }

    @PostMapping("/send/{recipient}")
    public Message sendMessage(
            @RequestBody Map<String, String> request,
            @PathVariable String recipient, Message chatMessage) {
        String content = request.get("content");
        String sender = request.get("sender");
        messagingTemplate.convertAndSendToUser(
                chatMessage.getRecipient(),
                "/queue/messages",
                chatMessage
        );
        return messageService.sendMessage(content, sender, recipient);
    }
}
