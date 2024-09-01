package com.coding.crud_spring.controller;

import com.coding.crud_spring.service.CloudinaryService;
import com.coding.crud_spring.service.ContactService;
import com.coding.crud_spring.entity.Contact;
import com.coding.crud_spring.repository.ContactRepository;
import com.google.zxing.WriterException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200/apps/contacts")
@RequestMapping("/api/contacts")
@Api(value = "Contact Management System", description = "Operations pertaining to contacts in Contact Management System")
public class ContactController {
    private final ContactService contactService;
    private final CloudinaryService CloudinaryService;


    @Autowired
    public ContactController(ContactService contactService, com.coding.crud_spring.service.CloudinaryService cloudinaryService) {
        this.contactService = contactService;
        CloudinaryService = cloudinaryService;
    }

    @Autowired
    private ContactRepository contactRepository;

    /* @ApiOperation(value = "Add a contact", nickname = "addContact")
     @PostMapping
     public void addContact(@RequestBody Contact contact) {
         contactService.Add(contact);
     }*/
    @PostMapping
    public ResponseEntity<Contact> addContact(@RequestBody Contact contact) {
        try {
            Contact newContact = contactService.Add(contact);
            return ResponseEntity.ok(newContact);
        } catch (WriterException | IOException e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @ApiOperation(value = "Modify a contact", nickname = "modifyContact")
    /*@PutMapping("/{id}")
    public ResponseEntity<Contact> modify(@PathVariable Long id, @RequestBody Contact contactDetails) {
        Contact updatedContact = contactService.modify(id, contactDetails);
        return ResponseEntity.ok(updatedContact);
    }*/

    @PutMapping("/{id}")
    public ResponseEntity<Contact> modify(@PathVariable Long id, @RequestBody Contact contactDetails) {
        try {
            Contact updatedContact = contactService.modify(id, contactDetails);
            return ResponseEntity.ok(updatedContact);
        } catch (WriterException | IOException e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @ApiOperation(value = "Delete a contact", nickname = "deleteContact")
    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable Long id) {
        contactService.Delete(id);
    }

    @ApiOperation(value = "Check if phone exists", nickname = "checkPhoneExists")
    @GetMapping("/check-phone")
    public ResponseEntity<Boolean> checkPhoneExists(@RequestParam String phone) {
        boolean exists = contactService.checkPhoneExists(phone);
        return new ResponseEntity<>(exists, HttpStatus.OK);
    }

    @ApiOperation(value = "View a list of available contacts", nickname = "getAllContacts")
    @GetMapping
    public Set<Contact> getAllContacts() {
        return contactService.getAll();
    }

    @ApiOperation(value = "Get a contact by Id", nickname = "getContactById")
    @GetMapping("/{id}")
    public Contact getOneContact(@PathVariable Long id) {
        return contactService.getOneById(id);
    }

    @ApiOperation(value = "Search contacts", nickname = "searchContacts")
    @GetMapping("/search")
    public List<Contact> searchContacts(@RequestParam String query) {
        return contactRepository.findByFnameContainingOrLnameContaining(query, query);
    }

    @PostMapping("/upload/{contactId}")
    public ResponseEntity<?> uploadImage(@PathVariable Long contactId, @RequestParam("file") MultipartFile file) {
        String imageUrl = CloudinaryService.uploadToCloudinary(file); // Upload image to Cloudinary

        // Find the contact and update image URL
        Optional<Contact> contactOptional = contactRepository.findById(contactId);
        if (!contactOptional.isPresent()) {
            return ResponseEntity.status(404).body("Contact not found for this id :: " + contactId);
        }
        Contact contact = contactOptional.get();
        contact.setImage(imageUrl);
        contactRepository.save(contact);

        return ResponseEntity.ok(Collections.singletonMap("imageUrl", imageUrl)); // Return Cloudinary URL
    }

    @PostMapping("/upload2")
    public ResponseEntity<?> uploadImage1(@RequestParam("file") MultipartFile file) {
        // Upload image to Cloudinary
        String imageUrl = CloudinaryService.uploadToCloudinary(file);

        // Return the image URL
        return ResponseEntity.ok(Collections.singletonMap("imageUrl", imageUrl));
    }
}
