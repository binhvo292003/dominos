package com.vqb.pizzeee.repository;

import com.vqb.pizzeee.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {


}
