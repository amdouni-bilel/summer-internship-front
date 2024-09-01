package com.coding.crud_spring.service;

import com.coding.crud_spring.exception.ResourceNotFoundException;
import com.coding.crud_spring.entity.Contact;
import com.coding.crud_spring.repository.ContactRepository;
import com.google.zxing.WriterException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ContactService {
    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Autowired
    private QRCodeGeneratorService qrCodeGeneratorService;

    public Contact Add(Contact contact) throws WriterException, IOException {
        // Construire le texte du QR code
        String qrCodeText = "Nom: " + contact.getFname() + " " + contact.getLname() + "\n" +
                "Société: " + contact.getSociete() + "\n" +
                "Téléphone: " + contact.getTlph();

        // Préparer le texte du QR code avec le format 'tel:'
        String qrCodeCallText = contact.getTlph(); // Texte pour lancer l'appel

        // Générer le QR code avec le texte d'appel
        String qrCode = qrCodeGeneratorService.generateQRCode(qrCodeCallText, 200, 200);

        // Ajouter le QR code au contact
        contact.setQr_code(qrCode);

        // Sauvegarder le contact dans la base de données
        return contactRepository.save(contact);
    }


    public Contact modify(Long id, Contact contactDetails) throws WriterException, IOException {
        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Contact not found for this id :: " + id));
        contact.setFname(contactDetails.getFname());
        contact.setLname(contactDetails.getLname());
        contact.setSociete(contactDetails.getSociete());
        contact.setSocadd(contactDetails.getSocadd());
        contact.setSoctlph(contactDetails.getSoctlph());
        contact.setTlph(contactDetails.getTlph());
        contact.setPost(contactDetails.getPost());
        contact.setComment(contactDetails.getComment());
        contact.setImage(contactDetails.getImage());

        // Construire le texte du QR code
        String qrCodeText = "Nom: " + contact.getFname() + " " + contact.getLname() + "\n" +
                "Société: " + contact.getSociete() + "\n" +
                "Téléphone: " + contact.getTlph();

        // Préparer le texte du QR code avec le format 'tel:'
        String qrCodeCallText = contact.getTlph(); // Texte pour lancer l'appel

        // Générer le QR code avec le texte d'appel
        String qrCode = qrCodeGeneratorService.generateQRCode(qrCodeCallText, 200, 200);

        // Ajouter le QR code au contact
        contact.setQr_code(qrCode);

        return contactRepository.save(contact);
    }

   
    public void Delete(Long id) {
        if (contactRepository.existsById(id)) {
            contactRepository.deleteById(id);
        }
    }

    public boolean checkPhoneExists(String phone) {
        return contactRepository.existsByTlphOrSoctlph(phone, phone);
    }

    public Set<Contact> getAll() {
        return new HashSet<>(contactRepository.findAll());
    }

    public Contact getOneById(Long id) {
        return contactRepository.findById(id).orElse(null);
    }


}

