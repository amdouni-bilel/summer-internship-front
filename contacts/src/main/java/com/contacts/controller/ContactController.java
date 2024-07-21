package com.contacts.controller;

import com.contacts.Services.ContactService;
import com.contacts.model.Contact;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:4200/apps/contacts")
@RequestMapping("/api/contacts")
@Api(value = "Contact Management System", description = "Operations pertaining to contacts in Contact Management System")

public class ContactController {
  private final   ContactService contactService;
    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }
    @ApiOperation(value = "Add a contact")
    @PostMapping
    public void addContact(@RequestBody Contact contact) {
        contactService.Add(contact);
    }

    /*@PutMapping("/{id}")
    public void modifyContact(@PathVariable Long id, @RequestBody Contact contact) {
        contact.setId(id);  // Ensure the ID is set from the path variable
        contactService.Modify(contact);
    }*/
    @ApiOperation(value = "Modify a contact")

    @PutMapping("/{id}")
    public ResponseEntity<Contact> modify(@PathVariable Long id, @RequestBody Contact contactDetails) {
        contactDetails.setId(id);  // Ensure the ID is set from the path variable
        Contact updatedContact = contactService.modify(id, contactDetails);
        return ResponseEntity.ok(updatedContact);
    }
    @ApiOperation(value = "Delete a contact")
    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable Long id) {
        contactService.Delete(id);
    }

    @ApiOperation(value = "View a list of available contacts")
    @GetMapping
    public Set<Contact> getAllContacts() {
        return contactService.getAll();
    }

    // Example of getting one contact by ID
    @ApiOperation(value = "Get a contact by Id")
    @GetMapping("/{id}")
    public Contact getOneContact(@PathVariable Long id) {
        return contactService.getOneById(id);
    }
}
