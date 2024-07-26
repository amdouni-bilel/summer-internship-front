package com.coding.crud_spring.service;

import com.coding.crud_spring.entity.Conges;
import com.coding.crud_spring.entity.User;
import com.coding.crud_spring.exception.InsufficientDaysException;
import com.coding.crud_spring.exception.ResourceNotFoundException;
import com.coding.crud_spring.repository.CongesRepository;
import com.coding.crud_spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CongesService {

    @Autowired
    private CongesRepository congesRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Conges> getAllConges() {
        return congesRepository.findAll();
    }

    public Conges getCongesById(Long id) {
        return congesRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Conges not found with id: " + id));
    }

    public Conges createConges(Conges conges) {
        User user = userRepository.findById(conges.getUser().getId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + conges.getUser().getId()));

        if (user.getJoursCong() < conges.getJoursCong()) {
            throw new InsufficientDaysException("User does not have enough days of congé.");
        }

        user.setJoursCong(user.getJoursCong() - conges.getJoursCong());
        userRepository.save(user);

        conges.setUser(user);
        conges.setConfirmed(false);
        return congesRepository.save(conges);
    }


    public Conges confirmConges(Long id) {
        Conges conges = congesRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Conges not found with id: " + id));
        conges.setConfirmed(true);
        return congesRepository.save(conges);
    }

    public Conges updateConges(Long id, Conges congesDetails) {
        Conges conges = congesRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Conges not found with id: " + id));
        User user = conges.getUser();
        int originalJoursCong = conges.getJoursCong();


        user.setJoursCong(user.getJoursCong() + originalJoursCong - congesDetails.getJoursCong());
        if (user.getJoursCong() < 0) {
            throw new IllegalArgumentException("Not enough leave days available");
        }
        userRepository.save(user);

        conges.setJoursCong(congesDetails.getJoursCong());
        conges.setDateDebut(congesDetails.getDateDebut());
        return congesRepository.save(conges);
    }

    public void deleteConges(Long id) {
        Conges conges = congesRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Conges not found with id: " + id));
        User user = conges.getUser();
        user.setJoursCong(user.getJoursCong() + conges.getJoursCong());
        userRepository.save(user);
        congesRepository.deleteById(id);
    }
}
