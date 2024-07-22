package com.coding.crud_spring.controller;

import com.coding.crud_spring.entity.MissionUser;
import com.coding.crud_spring.service.MissionUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mission-user")
public class MissionUserController {

    @Autowired
    private MissionUserService missionUserService;

    @PostMapping("/assign")
    public MissionUser assignMissionToUser(@RequestParam Long userId, @RequestParam Long missionId) {
        return missionUserService.assignMissionToUser(userId, missionId);
    }

    @GetMapping("/user/{userId}")
    public List<MissionUser> getMissionsByUserId(@PathVariable Long userId) {
        return missionUserService.getMissionsByUserId(userId);
    }
}
