package com.coding.crud_spring.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/files")
public class File1Controller {

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
        // Handle file storage logic here
        return ResponseEntity.ok().body("File uploaded successfully");
    }
}
