package com.coding.crud_spring.controller;

import com.coding.crud_spring.entity.Customer;
import com.coding.crud_spring.repository.CustomerRepository;
import com.coding.crud_spring.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CustomerController {
    private final CustomerService customerService;
    @PostMapping("/customer")
    public Customer postCustomer(@RequestBody Customer customer)
    {
        return customerService.postCustomer(customer);
    }
}
