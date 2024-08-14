package com.vqb.pizzeee.request;

import com.vqb.pizzeee.model.Category;
import com.vqb.pizzeee.model.IngredientItem;
import lombok.Data;

import java.util.List;

@Data
public class CreateFoodRequest {

    private String name;
    private String description;
    private Long price;

    private Category category;
    private List<String> images;

    private Long restaurantId;
    private boolean vegetarin;
    private boolean seasional;
    private List<IngredientItem> ingredients;


}
