package com.angum.finances_backend.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "movement", schema = "finances")
public class Movement {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="description", nullable=false)
	private String description;
	@Column(name="amount", nullable=false)
	private BigDecimal amount;
	@Column(name="date", nullable=false)
	private LocalDate date;
	
	@ManyToOne
	@JoinColumn(name="category_id", nullable=false)
	private Category category; 
	
	private Boolean isDeposit;
	
	public Movement() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Boolean getIsDeposit() {
		return isDeposit;
	}

	public void setIsDeposit(Boolean isDeposit) {
		this.isDeposit = isDeposit;
	}
	
	
}
