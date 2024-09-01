package com.coding.crud_spring.service;

import com.coding.crud_spring.dto.LoginUserDto;
import com.coding.crud_spring.dto.RegisterUserDto;
import com.coding.crud_spring.entity.User;
import com.coding.crud_spring.repository.UserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService {


    private final UserRepository userRepository;


    public boolean usernameExists(String email) {
        return userRepository.findByUsername(email).isPresent();
    }

    public AuthenticationService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User signup(RegisterUserDto registerUserDto) {
        User user = new User();
        user.setFullName(registerUserDto.getFullName());
        user.setUsername(registerUserDto.getUsername());
        user.setPassword(registerUserDto.getPassword());
       user.setConnected(false);  // Set isConnected to true on signup
        user.setRoles("USER");
        return userRepository.save(user);
    }
    public User authenticate(LoginUserDto loginUserDto) {
        User user = userRepository.findByUsername(loginUserDto.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if (!user.getPassword().equals(loginUserDto.getPassword())) {
            throw new RuntimeException("Invalid password");
        }
        user.setConnected(true);
        return user;
    }
    public boolean resetPassword(String email, String newPassword) {
        Optional<User> userOptional = userRepository.findByUsername(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setPassword(newPassword);
            userRepository.save(user);
            return true;
        }
        return false;
    }
}
