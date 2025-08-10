package com.angum.finances_backend.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.angum.finances_backend.model.Movement;
import com.angum.finances_backend.repository.MovementRepository;

@Service
public class MovementService {
	
	private final MovementRepository movementRepository;
	
	public MovementService(MovementRepository movementRepository) {
		this.movementRepository = movementRepository;
	}
	
	public Movement createMovement(Movement movement) {
		return this.movementRepository.save(movement);
	}
	
	public Page<Movement> getMovements(Boolean isDeposit, Pageable pageable) {
		return this.movementRepository.findByIsDeposit(isDeposit, pageable);
	}
	
	public Page<Movement> getMovements(Pageable pageable) {
		return this.movementRepository.findAll(pageable);
	}
}
