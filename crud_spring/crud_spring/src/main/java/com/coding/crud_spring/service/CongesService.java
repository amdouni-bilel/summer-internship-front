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
        User user = conges.getUser();
        if (user.getJoursCong() < conges.getJoursCong()) {
            throw new InsufficientDaysException("User does not have enough days off");
        }
        user.setJoursCong(user.getJoursCong() - conges.getJoursCong());
        userRepository.save(user);
        return congesRepository.save(conges);
    }

    public Conges confirmConges(Long id) {
        Conges conges = getCongesById(id);
        conges.setConfirmed(true);
        return congesRepository.save(conges);
    }

    public Conges updateConges(Long id, Conges congesDetails) {
        Conges conges = getCongesById(id);
        conges.setJoursCong(congesDetails.getJoursCong());
        conges.setDateDebut(congesDetails.getDateDebut());
        conges.setConfirmed(congesDetails.isConfirmed());
        return congesRepository.save(conges);
    }

    public void deleteConges(Long id) {
        Conges conges = getCongesById(id);
        congesRepository.delete(conges);
    }
}
