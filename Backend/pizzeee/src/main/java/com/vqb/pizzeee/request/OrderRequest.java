package com.vqb.pizzeee.request;

import com.vqb.pizzeee.model.Address;
import lombok.Data;

@Data
public class OrderRequest {

    private Long restaurantId;
    private Address deliveryAddress;


}
