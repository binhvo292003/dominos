package com.vqb.pizzeee.repository;

import com.vqb.pizzeee.model.IngredientCategory;
import com.vqb.pizzeee.model.IngredientItem;
import com.vqb.pizzeee.request.IngredientCategoryRequest;
import com.vqb.pizzeee.request.IngredientItemRequest;
import com.vqb.pizzeee.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientController {

    @Autowired
    private IngredientService ingredientService;

    @PostMapping("/category")
    public ResponseEntity<IngredientCategory> createIngredientCategory(@RequestBody IngredientCategoryRequest req) throws Exception {
        IngredientCategory item = ingredientService.createIngredientCategory(req.getName(), req.getRestaurantId());

        return new ResponseEntity<>(item, HttpStatus.CREATED);

    }

    @PostMapping()
    public ResponseEntity<IngredientItem> createIngredientItem(@RequestBody IngredientItemRequest req) throws Exception {
        IngredientItem item = ingredientService.createIngredientItem(req.getRestaurantId(), req.getName(), req.getCategoryId());

        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }

    @PutMapping("/{id}/stock")
    public ResponseEntity<IngredientItem> createIngredientStock(@PathVariable Long id) throws Exception {
        IngredientItem item = ingredientService.updateStock(id);

        return new ResponseEntity<>(item, HttpStatus.OK);
    }

    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<IngredientItem>> getRestaurantIngredient(@PathVariable Long id) throws Exception {
        List<IngredientItem> items = ingredientService.findRestaurantsIngredient(id);

        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/restaurant/{id}/category")
    public ResponseEntity<List<IngredientCategory>> getRestaurantIngredientCategory(@PathVariable Long id) throws Exception {
        List<IngredientCategory> items = ingredientService.findIngredientCategoryByRestaurantId(id);

        return new ResponseEntity<>(items, HttpStatus.OK);
    }
    
}
