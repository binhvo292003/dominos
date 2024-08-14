package com.vqb.pizzeee.repository;

import com.vqb.pizzeee.model.Cart;
import com.vqb.pizzeee.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    public Cart findByCustomerId(Long userId);

}
