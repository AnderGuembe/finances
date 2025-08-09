package com.angum.finances_backend.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.angum.finances_backend.model.Movement;
import com.angum.finances_backend.repository.MovementRepository;

@RestController
@RequestMapping("/api/movement")
public class MovementController {
	
	private final MovementRepository movementRepository;
	
	public MovementController(MovementRepository movementRepository) {
		this.movementRepository = movementRepository;
	}
	
	@PostMapping("")
	public Movement createMovement(@RequestBody Movement movement) {
		return this.movementRepository.save(movement);
	}
	
	@GetMapping("")
	public PagedModel<Movement> getMovements(Pageable pageable) {
		return new PagedModel<>(this.movementRepository.findAll(pageable));
	}

}
