package com.coding.crud_spring.controller;

import com.coding.crud_spring.dto.LoginUserDto;
import com.coding.crud_spring.dto.RegisterUserDto;
import com.coding.crud_spring.dto.ResetPasswordRequest;
import com.coding.crud_spring.entity.User;
import com.coding.crud_spring.repository.UserRepository;
import com.coding.crud_spring.service.AuthenticationService;
import com.coding.crud_spring.service.EmailService;
import com.coding.crud_spring.service.JwtService;
import com.coding.crud_spring.service.UserService;
import com.coding.crud_spring.util.LoginResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {
    private final JwtService jwtService;
    private final AuthenticationService authenticationService;
    private final EmailService emailService;
    private final UserService userService;
    private final UserRepository userRepository;

    @Autowired
    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService, EmailService emailService, UserService userService, UserRepository userRepository) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
        this.emailService = emailService;
        this.userService = userService;
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
            System.out.println(jwtToken);
            Map<String, Object> response = new HashMap<>();
            response.put("token", jwtToken);
            response.put("fullName", authenticatedUser.getFullName());
            response.put("username", authenticatedUser.getUsername());
            response.put("roles", authenticatedUser.getRoles());
            return ResponseEntity.ok(response);
        } catch (AuthenticationException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ErrorResponse("Login failed: Invalid username or password"));
        }
    }
    @PostMapping("/send-otp")
    public ResponseEntity<?> sendOtp(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        boolean userExists = authenticationService.usernameExists(email);
        if (!userExists) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Collections.singletonMap("error", "Email not found"));
        }
        emailService.sendOtpEmail(email);
        return ResponseEntity.ok(Collections.singletonMap("message", "OTP sent successfully"));
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String otp = request.get("otp");

        // Replace this with your actual OTP verification logic
        boolean isOtpValid = emailService.verifyOtp(email, otp);

        if (isOtpValid) {
            return ResponseEntity.ok(Collections.singletonMap("message", "OTP verified"));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Collections.singletonMap("error", "Invalid OTP"));
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String newPassword = request.get("newPassword");
        boolean isPasswordReset = authenticationService.resetPassword(email, newPassword);
        if (isPasswordReset) {
            return ResponseEntity.ok(Collections.singletonMap("message", "Password reset successfully"));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Collections.singletonMap("error", "Failed to reset password"));
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
