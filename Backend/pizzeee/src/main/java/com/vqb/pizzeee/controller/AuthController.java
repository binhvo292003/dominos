package com.vqb.pizzeee.controller;


import com.vqb.pizzeee.config.JwtProvider;
import com.vqb.pizzeee.model.Cart;
import com.vqb.pizzeee.model.User;
import com.vqb.pizzeee.reponse.AuthResponse;
import com.vqb.pizzeee.repository.CartRepository;
import com.vqb.pizzeee.repository.UserRepository;
import com.vqb.pizzeee.service.CustomerUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private CustomerUserDetailsService customerUserDetailsService;

    @Autowired
    private CartRepository cartRepository;

    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws Exception{

        User isEmailExist=userRepository.findByEmail(user.getEmail());
        if(isEmailExist!=null){
            throw new Exception("Email is already existed");
        }

        User createdUser=new User();
        createdUser.setEmail(user.getEmail());
        createdUser.setFullName(user.getFullName());
        createdUser.setRole(user.getRole());
        createdUser.setPassword(passwordEncoder.encode(user.getPassword()));

        User savedUser=userRepository.save(createdUser);

        Cart cart=new Cart();
        cart.setCustomer(savedUser);
        cartRepository.save(cart);

        Authentication authentication =new UsernamePasswordAuthenticationToken(user.getEmail(),user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt=jwtProvider.generateToken(authentication);

        AuthResponse authResponse=new AuthResponse();
        authResponse.setJwt(jwt);
        authResponse.setMessage("Register success");
        authResponse.setRole(savedUser.getRole());


        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
    }
}
