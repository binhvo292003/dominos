package com.vqb.dominos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DominosApplication {

	public static void main(String[] args) {
		SpringApplication.run(DominosApplication.class, args);
	}

	@GetMapping("/")
	public String apiRoot(){
		return "Hello, world!";
	}
}
