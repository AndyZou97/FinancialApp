package com.xpanxion.FinancialApp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.xpanxion.FinancialApp.exception.ResourceNotFoundException;
import com.xpanxion.FinancialApp.model.Goals;
import com.xpanxion.FinancialApp.model.User;
import com.xpanxion.FinancialApp.repository.GoalsRepository;
import com.xpanxion.FinancialApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/")
public class GoalsController
{

    @Autowired
    private GoalsRepository goalsRepository;

    @Autowired
    private UserRepository userRepository;
    // get all goals
    @GetMapping("/goals")
    public List<Goals> getAllGoals(){
        return goalsRepository.findAll();
    }

    // create goals rest api
    @PostMapping("/users/{id}/goals")
    public Goals createGoals(@RequestBody Goals goals, @PathVariable Long id) {
        User user = this.userRepository.findById(id).get();
        goals.setUser(user);
        return goalsRepository.save(goals);
    }

    // get goals by id rest api
    @GetMapping("/goals/{id}")
    public ResponseEntity<Goals> getGoalsById(@PathVariable Long id) {
        Goals goals = goalsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Goals does not exist with id :" + id));
        return ResponseEntity.ok(goals);
    }

    // update goals rest api
    @PutMapping("/users/{userId}/goals/{id}")
    public ResponseEntity<Goals> updateGoals(@PathVariable Long id, @PathVariable Long userId, @RequestBody Goals goalsDetails){
        Goals goals = goalsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Goals does not exist with id :" + id));
        User user = userRepository.findById(userId).get();
        goals.setName(goalsDetails.getName());
        goals.setCost(goalsDetails.getCost());
        goals.setDownPayment(goalsDetails.getDownPayment());
        goals.setInterest(goalsDetails.getInterest());
        goals.setMonths(goalsDetails.getMonths());
        goals.setBalance(goalsDetails.getBalance());
        goals.setDescription(goalsDetails.getDescription());
        goals.setMonthlyPayment(goalsDetails.getMonthlyPayment());
        goals.setUser(user);
        Goals updatedGoals = goalsRepository.save(goals);

        return ResponseEntity.ok(updatedGoals);
    }

    // delete goals rest api
    @DeleteMapping("/goals/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteGoals(@PathVariable Long id){
        Goals goals = goalsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Goals does not exist with id :" + id));
        goalsRepository.delete(goals);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
