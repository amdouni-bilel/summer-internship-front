package com.contacts.Services;

import com.contacts.exception.ResourceNotFoundException;
import com.contacts.model.Contact;
import com.contacts.repository.ContactRepository;
import javafx.scene.control.Alert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import java.util.HashSet;
import java.util.Set;
@Service
public class ContactService {
    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    /*
        private ContactRepository contactRepository;
    */
  //  @Override
    public void Add(Contact contact) {
        contactRepository.save(contact);
    }

   // @Override
    /*public void Modify(Contact contact) {
        if (contactRepository.existsById(contact.getId())) {
            contactRepository.save(contact);
        } else {
            showAlert(Alert.AlertType.ERROR, "Erreur", "Le contact n'existe pas");
        }
    }*/
   public Contact modify(Long id, Contact contactDetails) {
       Contact contact = contactRepository.findById(id)
               .orElseThrow(() -> new ResourceNotFoundException("Contact not found with id: " + id));
       contact.setFname(contactDetails.getFname());
       contact.setLname(contactDetails.getLname());
       contact.setSociete(contactDetails.getSociete());
       contact.setSocadd(contactDetails.getSocadd());
       contact.setSoctlph(contactDetails.getSoctlph());
       contact.setTlph(contactDetails.getTlph());
       contact.setPost(contactDetails.getPost());
       contact.setComment(contactDetails.getComment());

       return contactRepository.save(contact);
   }
  //  @Override
    public void Delete(Long id) {
        if (contactRepository.existsById(id)) {
            contactRepository.deleteById(id);
        } else {
            showAlert(Alert.AlertType.ERROR, "Erreur", "Le contact n'existe pas");
        }
    }

  //  @Override
    public Set<Contact> getAll() {
        return new HashSet<>(contactRepository.findAll());
    }

  //  @Override
    public Contact getOneById(Long id) {
        return contactRepository.findById(id).orElse(null);
    }

    public static void showAlert(Alert.AlertType alertType, String title, String content) {
        Alert alert = new Alert(alertType);
        alert.setTitle(title);
        alert.setHeaderText(null);
        alert.setContentText(content);
        alert.showAndWait();
    }
}

