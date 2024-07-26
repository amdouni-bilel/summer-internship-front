package com.coding.crud_spring.service;

import com.coding.crud_spring.entity.User;
import com.coding.crud_spring.exception.ResourceNotFoundException;
import com.coding.crud_spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
    }

    public boolean usernameExists(String email) {
        return userRepository.findByUsername(email).isPresent();
    }


    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        user.setUsername(userDetails.getUsername());
        user.setFullName(userDetails.getFullName());
        user.setPassword(userDetails.getPassword());
        user.setRoles(userDetails.getRoles());
        user.setJoursCong(userDetails.getJoursCong());
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        userRepository.deleteById(id);
    }
}
