package com.cognizant.account.controller;

import com.cognizant.account.model.Account;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @GetMapping("/accounts/{number}")
    public Account getAccount(@PathVariable String number) {
        // Returns a dummy Account object matching the model structure
        return new Account(number, "savings", 234343.0);
    }
    
}