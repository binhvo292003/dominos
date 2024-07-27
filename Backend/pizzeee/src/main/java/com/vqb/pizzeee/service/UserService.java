package com.vqb.pizzeee.service;

import com.vqb.pizzeee.model.User;

public interface UserService {

    public User findUserByJwtToken(String jwt) throws Exception;

    public User findUserByEmail(String email) throws Exception;

}
