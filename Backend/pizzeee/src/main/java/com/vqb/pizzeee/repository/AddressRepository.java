package com.vqb.pizzeee.repository;

import com.vqb.pizzeee.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
