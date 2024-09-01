package com.coding.crud_spring.repository;


import com.coding.crud_spring.entity.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
    List<ChatMessage> findBySenderAndRecipientOrderByTimestampAsc(String sender, String recipient);
    List<ChatMessage> findByRecipientAndSenderOrderByTimestampAsc(String recipient, String sender);
}
