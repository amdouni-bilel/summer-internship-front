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

    public List<Conges> getCongesByUserId(Long userId) {
        return congesRepository.findByUserId(userId);
    }

    public Conges createConges(Conges conges) {
        if (conges.getUser() == null) {
            throw new IllegalArgumentException("User must be provided");
        }

        User user = userRepository.findById(conges.getUser().getId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + conges.getUser().getId()));

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

        if (congesDetails.getUser() == null || congesDetails.getUser().getId() == null) {
            throw new IllegalArgumentException("Update Conges: User details must be provided");
        }

        if (!conges.getUser().getId().equals(congesDetails.getUser().getId())) {
            User oldUser = conges.getUser();
            oldUser.setJoursCong(oldUser.getJoursCong() + conges.getJoursCong());
            userRepository.save(oldUser);

            User newUser = userRepository.findById(congesDetails.getUser().getId())
                    .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + congesDetails.getUser().getId()));

            if (newUser.getJoursCong() < congesDetails.getJoursCong()) {
                throw new InsufficientDaysException("User does not have enough days off");
            }

            newUser.setJoursCong(newUser.getJoursCong() - congesDetails.getJoursCong());
            conges.setUser(newUser);
            userRepository.save(newUser);
        } else {
            if (conges.getJoursCong() != congesDetails.getJoursCong()) {
                User user = conges.getUser();
                user.setJoursCong(user.getJoursCong() + conges.getJoursCong() - congesDetails.getJoursCong());

                if (user.getJoursCong() < 0) {
                    throw new InsufficientDaysException("User does not have enough days off");
                }

                userRepository.save(user);
            }
        }

        conges.setJoursCong(congesDetails.getJoursCong());
        conges.setDateDebut(congesDetails.getDateDebut());
        conges.setConfirmed(congesDetails.isConfirmed());
        return congesRepository.save(conges);
    }

    public void deleteConges(Long id) {
        Conges conges = getCongesById(id);
        if (conges.getUser() != null) {
            User user = conges.getUser();
            user.setJoursCong(user.getJoursCong() + conges.getJoursCong());
            userRepository.save(user);
        }
        congesRepository.delete(conges);
    }
}
