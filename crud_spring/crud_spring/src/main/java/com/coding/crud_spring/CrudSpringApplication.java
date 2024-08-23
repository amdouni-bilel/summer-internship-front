package com.coding.crud_spring;

import com.coding.crud_spring.controller.CustomerController;
import com.coding.crud_spring.controller.UserController;
import com.coding.crud_spring.service.CustomerService;
import com.coding.crud_spring.service.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);


	}

}
