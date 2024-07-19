package com.coding.crud_spring.service;

import com.coding.crud_spring.util.EmailClass;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class EmailService {

    private final EmailClass emailClass;
    private final Map<String, String> otpStorage = new HashMap<>();

    public EmailService() {
        this.emailClass = new EmailClass();
    }

    public String generateOTP() {
        Random random = new Random();
        int otp = 1000 + random.nextInt(9000);
        return String.valueOf(otp);
    }

    public void sendOtpEmail(String receiverEmail) {
        String otp = generateOTP();
        otpStorage.put(receiverEmail, otp);
        emailClass.envoyer(receiverEmail, "Your OTP is: " + otp);
    }

    public boolean verifyOtp(String email, String otp) {
        return otp.equals(otpStorage.get(email));
    }
}
