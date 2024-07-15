package com.coding.crud_spring.service;

import com.coding.crud_spring.entity.Customer;
import com.coding.crud_spring.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;
    public Customer postCustomer(Customer customer)
    {
        return customerRepository.save(customer);
    }
}
