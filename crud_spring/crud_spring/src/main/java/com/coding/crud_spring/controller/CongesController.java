package com.coding.crud_spring.controller;

import com.coding.crud_spring.entity.Conges;
import com.coding.crud_spring.entity.User;
import com.coding.crud_spring.exception.InsufficientDaysException;
import com.coding.crud_spring.exception.ResourceNotFoundException;
import com.coding.crud_spring.service.CongesService;
import com.coding.crud_spring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/conges")
public class CongesController {

    @Autowired
    private CongesService congesService;

    @Autowired
    private UserService userService;

    @GetMapping
    public List<Conges> getAllConges() {
        return congesService.getAllConges();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Conges> getCongesById(@PathVariable Long id) {
        Conges conges = congesService.getCongesById(id);
        return ResponseEntity.ok(conges);
    }

    @PostMapping
    public ResponseEntity<?> createConges(@RequestBody Conges conges) {
        try {
            // Ensure the user is set
            User user = userService.getUserById(conges.getUser().getId());
            conges.setUser(user);

            Conges newConges = congesService.createConges(conges);
            return ResponseEntity.status(HttpStatus.CREATED).body(newConges);
        } catch (InsufficientDaysException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PutMapping("/{id}/confirm")
    public ResponseEntity<?> confirmConges(@PathVariable Long id) {
        try {
            Conges conges = congesService.confirmConges(id);
            return ResponseEntity.ok(conges);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Conges> updateConges(@PathVariable Long id, @RequestBody Conges congesDetails) {
        try {
            Conges updatedConges = congesService.updateConges(id, congesDetails);
            return ResponseEntity.ok(updatedConges);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteConges(@PathVariable Long id) {
        congesService.deleteConges(id);
        return ResponseEntity.noContent().build();
    }
}
