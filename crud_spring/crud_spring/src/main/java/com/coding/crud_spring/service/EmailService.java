package com.coding.crud_spring.service;


import com.coding.crud_spring.util.EmailClass;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class EmailService {

    private final EmailClass emailClass;

    public EmailService() {
        this.emailClass = new EmailClass();
    }

    public String generateOTP() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }

    public void sendOtpEmail(String receiverEmail) {
        String otp = generateOTP();
        emailClass.envoyer(receiverEmail, "Your OTP is: " + otp);
    }
}
