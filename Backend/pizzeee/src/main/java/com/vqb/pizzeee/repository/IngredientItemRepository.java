package com.vqb.pizzeee.repository;

import com.vqb.pizzeee.model.IngredientItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientItemRepository extends JpaRepository<IngredientItem, Long> {

    List<IngredientItem> findByRestaurantId(Long id);

}
