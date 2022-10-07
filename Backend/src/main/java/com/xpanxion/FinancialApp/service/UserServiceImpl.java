package com.xpanxion.FinancialApp.service;


import com.xpanxion.FinancialApp.model.Goals;
import com.xpanxion.FinancialApp.model.User;
import com.xpanxion.FinancialApp.model.UserPrincipal;
import com.xpanxion.FinancialApp.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
@Qualifier("userDetailsService")
public class UserServiceImpl implements UserDetailsService
{
    private Logger LOGGER = LoggerFactory.getLogger(getClass());
    private UserRepository userRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;




    @Autowired
    public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByUsername(username);
        if (user == null)
        {
            throw new UsernameNotFoundException("user not found by username: " + username);
        }
        else{
            userRepository.save(user);
            UserPrincipal userPrincipal = new UserPrincipal(user);
            LOGGER.info("returning found user by username: " + username);
            return userPrincipal;
        }
    }

    public User register(String username, String password, String firstName, String lastName, String email)
    {
        User user = new User();
        user.setPassword( encodePassword(password));
        user.setUsername(username);
        user.setRole("ROLE_USER");
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmail(email);
        this.userRepository.save(user);
        return user;
    }

    public List<User> findAll(){
        return (List<User>) userRepository.findAll();
    }

   // public List<Goals> getGoalsByUser(Integer id){
    //    return userRepository.getGoalsByUser(id);
   // }

    private String encodePassword(String password)
    {
        return bCryptPasswordEncoder.encode(password);
    }
}