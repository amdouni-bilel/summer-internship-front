package com.coding.crud_spring.repository;

import com.coding.crud_spring.entity.Conges;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CongesRepository extends JpaRepository<Conges, Long> {
}
