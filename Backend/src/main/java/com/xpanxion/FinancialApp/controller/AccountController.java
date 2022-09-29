package com.xpanxion.FinancialApp.controller;
import com.xpanxion.FinancialApp.model.Account;
import com.xpanxion.FinancialApp.model.Status;
import com.xpanxion.FinancialApp.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping ("/api/v1/")
@RestController
public class AccountController {
    @Autowired
    AccountRepository accountRepository;
    @PostMapping("/Account/register")
    public Status registerAccount( @RequestBody Account newUser) {
        List<Account> accounts = accountRepository.findAll();
        System.out.println("New Account: " + newUser.toString());

        for (Account account: accounts) {
            System.out.println("Registered Account: " + newUser.toString());
            if (account.equals(newUser)) {
                System.out.println("User Already exists!");
                return Status.USER_ALREADY_EXISTS;
            }
        }
        accountRepository.save(newUser);
        return Status.SUCCESS;
    }
    @PostMapping("/Account/login")
    public Status loginUser( @RequestBody Account account) {
        List<Account> accounts = accountRepository.findAll();
        for (Account other : accounts) {
            if (other.equals(account)) {
                account.setLoggedIn(true);
                accountRepository.save(account);
                return Status.SUCCESS;
            }
        }
        return Status.FAILURE;
    }
    @PostMapping("/Account/logout")
    public Status logUserOut(@RequestBody Account account) {
        List<Account> accounts = accountRepository.findAll();
        for (Account other : accounts) {
            if (other.equals(account)) {
                account.setLoggedIn(false);
                accountRepository.save(account);
                return Status.SUCCESS;
            }
        }
        return Status.FAILURE;
    }
    @DeleteMapping("/Account/all")
    public Status deleteUsers() {
        accountRepository.deleteAll();
        return Status.SUCCESS;
    }
}
