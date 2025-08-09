package com.angum.finances_backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angum.finances_backend.model.Category;
import com.angum.finances_backend.repository.CategoryRepository;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
	
	private final CategoryRepository categoryRepository;
	
	public CategoryController(CategoryRepository categoryRepository) {
		this.categoryRepository = categoryRepository;
	}
	
	@PostMapping("")
	public Category createCategory(@RequestBody Category category) {
		return this.categoryRepository.save(category);
	}
	
	@GetMapping("")
	public List<Category> getCategories() {
		return this.categoryRepository.findAll();
	}

}
