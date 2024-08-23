package com.coding.crud_spring.controller;

import com.coding.crud_spring.entity.Mission;
import com.coding.crud_spring.service.MissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mission")
public class MissionController {

    @Autowired
    private MissionService ms;

    @GetMapping
    public List<Mission> getAllMissions() {
        return ms.getAllMissions();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Mission> getMissionById(@PathVariable Long id) {
        Mission ms1 = ms.getMissionById(id).orElseThrow(() -> new RuntimeException("Mission not found"));
        return ResponseEntity.ok(ms1);
    }

    @PostMapping
    public Mission createMission(@RequestBody Mission mission) {
        return ms.createMission(mission);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Mission> updateMission(@PathVariable Long id, @RequestBody Mission missionDetails) {
        Mission updatedMission = ms.updateMission(id, missionDetails);
        return ResponseEntity.ok(updatedMission);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMission(@PathVariable Long id) {
        ms.deleteMission(id);
        return ResponseEntity.noContent().build();
    }
}
