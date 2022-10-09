package com.xpanxion.FinancialApp.controller;

import com.xpanxion.FinancialApp.exception.ResourceNotFoundException;
import com.xpanxion.FinancialApp.model.Goals;
import com.xpanxion.FinancialApp.model.User;
import com.xpanxion.FinancialApp.repository.UserRepository;
import com.xpanxion.FinancialApp.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@RestController
public class AuthController
{

    private UserRepository userRepository;

    private UserServiceImpl userService;

    private AuthenticationManager authenticationManager;

    public AuthController(UserRepository userRepository, UserServiceImpl userService, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.userService = userService;
        this.authenticationManager = authenticationManager;
    }

    @Autowired


    @GetMapping("/home")
    public String showUser()
    {
        return "Application Works";
    }

    @GetMapping("/users")
    public List<User> findAll(){
        return userService.findAll();
    }

    @GetMapping("/users/{id}")
    public List<Goals> getUsersById(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Goals does not exist with id :" + id));
        return user.getGoals();
    }


    @PostMapping("/signin")
    public ResponseEntity<User> login(@RequestBody User user) {
        authenticate(user.getUsername(), user.getPassword());
        User loginUser = userRepository.findUserByUsername(user.getUsername());
        return new ResponseEntity<>(loginUser, OK);
    }

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user)
    {
        User registerUser = userService.register(user.getUsername(), user.getPassword(), user.getFirstName(), user.getLastName(), user.getEmail());
        return new ResponseEntity<>(registerUser, OK);
    }

    private void authenticate(String username, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
    }
}


