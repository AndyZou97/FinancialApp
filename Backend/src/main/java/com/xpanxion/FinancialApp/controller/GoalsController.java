package com.xpanxion.FinancialApp.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.xpanxion.FinancialApp.exception.ResourceNotFoundException;
import com.xpanxion.FinancialApp.model.Goals;
import com.xpanxion.FinancialApp.repository.GoalsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class GoalsController
{

    @Autowired
    private GoalsRepository goalsRepository;
    // get all goals
    @GetMapping("/goals")
    public List<Goals> getAllGoals(){
        return goalsRepository.findAll();
    }

    // create goals rest api
    @PostMapping("/goals")
    public Goals createGoals(@RequestBody Goals goals) {
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
    @PutMapping("/goals/{id}")
    public ResponseEntity<Goals> updateGoals(@PathVariable Long id, @RequestBody Goals goalsDetails){
        Goals goals = goalsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Goals does not exist with id :" + id));
        goals.setName(goalsDetails.getName());
        goals.setCost(goalsDetails.getCost());
        goals.setDownPayment(goalsDetails.getDownPayment());
        goals.setInterest(goalsDetails.getInterest());
        goals.setMonths(goalsDetails.getMonths());
        goals.setBalance(goalsDetails.getBalance());
        goals.setDescription(goalsDetails.getDescription());
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
