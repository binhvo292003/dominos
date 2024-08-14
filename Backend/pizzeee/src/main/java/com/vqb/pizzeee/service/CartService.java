package com.vqb.pizzeee.service;

import com.vqb.pizzeee.model.Cart;
import com.vqb.pizzeee.model.CartItem;
import com.vqb.pizzeee.request.AddCartItemRequest;

public interface CartService {

    public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws Exception;

    public CartItem updateCartItemQuantity(Long cartItemId, int quantity) throws Exception;

    public Cart removeItemFromCart(Long cartId, String jwt) throws Exception;

    public Long caculateCartTotals(Cart cart) throws Exception;

    public Cart findCartById(Long id) throws Exception;

    public Cart findByUserJwt(String jwt) throws Exception;

    public Cart findByUserId(Long userId) throws Exception;

    public Cart clearCart(String jwt) throws Exception;

}
