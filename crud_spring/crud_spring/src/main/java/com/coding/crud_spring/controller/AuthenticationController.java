package com.coding.crud_spring.controller;

import com.coding.crud_spring.dto.LoginUserDto;
import com.coding.crud_spring.dto.RegisterUserDto;
import com.coding.crud_spring.entity.User;
import com.coding.crud_spring.repository.UserRepository;
import com.coding.crud_spring.service.AuthenticationService;
import com.coding.crud_spring.service.EmailService;
import com.coding.crud_spring.service.JwtService;
import com.coding.crud_spring.util.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {
    private final JwtService jwtService;
    private final AuthenticationService authenticationService;
    private final EmailService emailService;

    private  final UserRepository userRepository;

    @Autowired
    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService, EmailService emailService,UserRepository userRepository) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
        this.emailService = emailService;
        this.userRepository = userRepository;
    }

    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody RegisterUserDto registerUserDto) {
        User registeredUser = authenticationService.signup(registerUserDto);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody LoginUserDto loginUserDto) {
        try {
            User authenticatedUser = authenticationService.authenticate(loginUserDto);
            String jwtToken = jwtService.generateToken(authenticatedUser);
            LoginResponse loginResponse = new LoginResponse()
                    .setToken(jwtToken)
                    .setExpiresIn(jwtService.getExpirationTime());
            System.out.println(jwtToken);
            return ResponseEntity.ok(loginResponse);
        } catch (AuthenticationException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ErrorResponse("Login failed: Invalid username or password"));
        }
    }

    @PostMapping("/send-otp")
    public ResponseEntity<?> sendOtp(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        Optional<User> user = userRepository.findByUsername(email);

        if (user.isPresent()) {
            emailService.sendOtpEmail(email);
            return ResponseEntity.ok("OTP sent successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse("Email not found"));
        }
    }

    public static class ErrorResponse {
        private String message;

        public ErrorResponse(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }
}
