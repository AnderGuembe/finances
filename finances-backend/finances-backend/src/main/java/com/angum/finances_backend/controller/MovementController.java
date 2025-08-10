package com.angum.finances_backend.controller;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.angum.finances_backend.model.Movement;
import com.angum.finances_backend.service.MovementService;

@RestController
@RequestMapping("/api/movement")
public class MovementController {
	
	private final MovementService movementService;
	
	public MovementController(MovementService movementService) {
		this.movementService = movementService;
	}
	
	@PostMapping("")
	public Movement createMovement(@RequestBody Movement movement) {
		return this.movementService.createMovement(movement);
	}
	
	@GetMapping("")
	public PagedModel<Movement> getMovements(Pageable pageable, @RequestParam(required = false) Optional<Boolean> isDeposit) {
		Page<Movement> movements = isDeposit
				.map(d -> this.movementService.getMovements(d, pageable))
				.orElse(this.movementService.getMovements(pageable));
		return new PagedModel<>(movements);
	}

}
