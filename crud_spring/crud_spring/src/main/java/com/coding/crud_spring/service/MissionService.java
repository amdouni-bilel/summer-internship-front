package com.coding.crud_spring.service;


import com.coding.crud_spring.entity.Mission;
import com.coding.crud_spring.entity.User;
import com.coding.crud_spring.repository.MissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MissionService {

    @Autowired
    private MissionRepository MissionRepository;

    public List<Mission> getAllMissions() {
        return MissionRepository.findAll();
    }

    public Optional<Mission> getMissionById(Long id) {
        return MissionRepository.findById(id);
    }

    public Mission createMission(Mission Mission) {
        return MissionRepository.save(Mission);
    }

    public Mission updateMission(Long id, Mission MissionDetails) {
        Mission mission = MissionRepository.findById(id).orElseThrow(() -> new RuntimeException("Mission not found"));
        mission.setEndDate(MissionDetails.getEndDate());
        mission.setStartDate(MissionDetails.getStartDate());
        mission.setTjm(MissionDetails.getTjm());
        mission.setIsForMe(MissionDetails.getIsForMe());
        mission.setShareMission(MissionDetails.isShareMission());
        mission.setFreeDays(MissionDetails.getFreeDays());
        mission.setSellDays(MissionDetails.isSellDays());
        return MissionRepository.save(mission);
    }

    public void deleteMission(Long id) {
        MissionRepository.deleteById(id);
    }
}
