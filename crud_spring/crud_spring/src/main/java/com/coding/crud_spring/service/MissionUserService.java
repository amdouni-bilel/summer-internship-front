package com.coding.crud_spring.service;

import com.coding.crud_spring.dto.MissionUserDTO;
import com.coding.crud_spring.entity.Mission;
import com.coding.crud_spring.entity.MissionUser;
import com.coding.crud_spring.entity.User;
import com.coding.crud_spring.repository.MissionUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MissionUserService {

    @Autowired
    private MissionUserRepository missionUserRepository;

    public MissionUser assignMissionToUser(Long userId, Long missionId) {
        // Check if the mission is already assigned to the user
        if (missionUserRepository.existsByUserIdAndMissionId(userId, missionId)) {
            throw new RuntimeException("Mission is already assigned to this user");
        }

        // Create and save the new assignment
        MissionUser missionUser = new MissionUser();
        missionUser.setUser(new User(userId));
        missionUser.setMission(new Mission(missionId));
        return missionUserRepository.save(missionUser);
    }

    /*public List<MissionUser> getMissionsByUserId(Long userId) {
        return missionUserRepository.findByUserId(userId);
    }*/


    public boolean isMissionAssignedToUser(Long userId, Long missionId) {
        // Check if the assignment already exists
        return missionUserRepository.existsByUserIdAndMissionId(userId, missionId);
    }


    public List<MissionUserDTO> getMissionsByUserId(Long userId) {
        List<MissionUser> missionUsers = missionUserRepository.findByUserId(userId);
        return missionUsers.stream()
                .map(missionUser -> new MissionUserDTO(missionUser.getMission().getId()))
                .collect(Collectors.toList());
    }
}
