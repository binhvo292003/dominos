package com.vqb.pizzeee.controller;

import com.vqb.pizzeee.model.*;
import com.vqb.pizzeee.request.IngredientCategoryRequest;
import com.vqb.pizzeee.request.IngredientItemRequest;
import com.vqb.pizzeee.service.FoodService;
import com.vqb.pizzeee.service.IngredientService;
import com.vqb.pizzeee.service.RestaurantService;
import com.vqb.pizzeee.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("/search")
    public ResponseEntity<List<Food>> searchFood(@RequestParam String keyword,
                                                 @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        List<Food> food = foodService.searchFood(keyword);

        return new ResponseEntity<>(food, HttpStatus.OK);
    }

    @GetMapping("/restaurant/{restaurantId}")
    public ResponseEntity<List<Food>> getRestaurantFood(@RequestParam boolean vegetarian,
                                                        @RequestParam boolean seasonal,
                                                        @RequestParam boolean nonveg,
                                                        @RequestParam(required = false) String food_category,
                                                        @PathVariable Long restaurantId,
                                                        @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        List<Food> food = foodService.getRestaurantsFood(restaurantId, vegetarian, nonveg, seasonal, food_category);

        return new ResponseEntity<>(food, HttpStatus.OK);
    }


    @RestController
    @RequestMapping("/api/admin/ingredients")
    public static class IngredientController {

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
}
