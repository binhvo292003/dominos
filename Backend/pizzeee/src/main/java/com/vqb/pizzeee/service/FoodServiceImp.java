package com.vqb.pizzeee.service;

import com.vqb.pizzeee.model.Category;
import com.vqb.pizzeee.model.Food;
import com.vqb.pizzeee.model.Restaurant;
import com.vqb.pizzeee.repository.FoodRepository;
import com.vqb.pizzeee.request.CreateFoodRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FoodServiceImp implements FoodService {

    @Autowired
    private FoodRepository foodRepository;

    @Override
    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant) {
        Food food = new Food();
        food.setFoodCategory(category);
        food.setRestaurant(restaurant);
        food.setDescription(req.getDescription());
        food.setImages(req.getImages());
        food.setName(req.getName());
        food.setPrice(req.getPrice());
        food.setIngredients(req.getIngredients());
        food.setSeasonal(req.isSeasional());
        food.setVegetarian(req.isVegetarin());

        Food savedFood = foodRepository.save(food);
        restaurant.getFoods().add(savedFood);

        return savedFood;
    }

    @Override
    public void deleteFood(Long foodId) throws Exception {

        Food food = findFoodById(foodId);
        food.setRestaurant(null);
        foodRepository.save(food);

    }

    @Override
    public List<Food> getRestaurantsFood(Long restaurantId,
                                         boolean isVegitarian,
                                         boolean isNonveg,
                                         boolean isSeasonal,
                                         String foodCategory) {

        List<Food> foods = foodRepository.findByRestaurantId(restaurantId);

        if (isVegitarian) {
            foods = filterByVegeterian(foods);
        }

        if (isNonveg) {
            foods = filterByNodVegeterian(foods);
        }

        if (isSeasonal) {
            foods = filterBySeasonal(foods);
        }

        if (foodCategory != null && !foodCategory.equals("")) {
            foods = filterByCategory(foods, foodCategory);
        }

        return List.of();
    }

    private List<Food> filterByCategory(List<Food> foods, String foodCategory) {

        return foods.stream().filter(food -> {
            if (food.getFoodCategory() != null) {
                return food.getFoodCategory().getName().equals(foodCategory);
            }
            return false;
        }).collect(Collectors.toList());

    }

    private List<Food> filterBySeasonal(List<Food> foods) {

        return foods.stream().filter(food -> food.isSeasonal() == true).collect(Collectors.toList());

    }

    private List<Food> filterByNodVegeterian(List<Food> foods) {

        return foods.stream().filter(food -> food.isVegetarian() == false).collect(Collectors.toList());

    }

    private List<Food> filterByVegeterian(List<Food> foods) {

        return foods.stream().filter(food -> food.isVegetarian() == true).collect(Collectors.toList());

    }

    @Override
    public List<Food> searchFood(String keyword) {
        return foodRepository.searchFood(keyword);
    }

    @Override
    public Food findFoodById(Long foodId) throws Exception {
        Optional<Food> optionalFood = foodRepository.findById(foodId);

        if (optionalFood.isEmpty()) {
            throw new Exception("food not exist...");
        }

        return optionalFood.get();
    }

    @Override
    public Food updateAvailibility(Long foodId) throws Exception {
        Food food = findFoodById(foodId);
        food.setAvailable(!food.isAvailable());

        return foodRepository.save(food);
    }
}
