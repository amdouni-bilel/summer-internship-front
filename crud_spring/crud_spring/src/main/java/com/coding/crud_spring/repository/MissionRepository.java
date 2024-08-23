package com.coding.crud_spring.repository;

import com.coding.crud_spring.entity.Mission;
import com.coding.crud_spring.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface MissionRepository extends JpaRepository<Mission, Long> {
}