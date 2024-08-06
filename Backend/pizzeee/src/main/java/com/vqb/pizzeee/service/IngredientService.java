package com.vqb.pizzeee.service;

import com.vqb.pizzeee.model.IngredientCategory;
import com.vqb.pizzeee.model.IngredientItem;

import java.util.List;

public interface IngredientService {

    public IngredientCategory createIngredientCategory(String name, Long restaurantId) throws Exception;

    public IngredientCategory findIngredientCategoryById(Long id) throws Exception;

    public List<IngredientCategory> findIngredientCategoryByRestaurantId(Long id) throws Exception;

    public IngredientItem createIngredientItem(Long restaurantId, String ingredientName, Long category) throws Exception;

    public List<IngredientItem> findRestaurantsIngredient(Long restaurantId);

    public IngredientItem updateStock(Long id) throws Exception;

}
