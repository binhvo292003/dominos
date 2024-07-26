package com.vqb.pizzeee.repository;

import com.vqb.pizzeee.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart,Long> {
}
