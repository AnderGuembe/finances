package com.angum.finances_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angum.finances_backend.model.Movement;

public interface MovementRepository extends JpaRepository<Movement, Long> {

}
