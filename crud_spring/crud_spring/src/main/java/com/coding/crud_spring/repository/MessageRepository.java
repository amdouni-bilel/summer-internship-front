package com.coding.crud_spring.repository;

import com.coding.crud_spring.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findBySenderAndRecipientOrderByTimestampAsc(String sender, String recipient);

    List<Message> findByRecipientAndSenderOrderByTimestampAsc(String recipient, String sender);

    @Query("SELECT m FROM Message m WHERE (m.sender = :currentUser AND m.recipient = :selectedUser) " +
            "OR (m.sender = :selectedUser AND m.recipient = :currentUser) ORDER BY m.timestamp ASC")
    List<Message> findByParticipantsSortedByTimestamp(
            @Param("currentUser") String currentUser,
            @Param("selectedUser") String selectedUser);
}
