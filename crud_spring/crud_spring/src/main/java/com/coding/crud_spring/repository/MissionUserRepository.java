package com.coding.crud_spring.repository;

import com.coding.crud_spring.entity.MissionUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MissionUserRepository extends JpaRepository<MissionUser, Long> {
    List<MissionUser> findByUserId(Long userId);
    List<MissionUser> findByMissionId(Long missionId);

    boolean existsByUserIdAndMissionId(Long userId, Long missionId);



}
