package com.coding.crud_spring.repository;

import com.coding.crud_spring.entity.Conges;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CongesRepository extends JpaRepository<Conges, Long> {
    List<Conges> findByUserId(Long userId);

}
