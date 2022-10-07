package com.xpanxion.FinancialApp.repository;



import com.xpanxion.FinancialApp.model.Goals;
import com.xpanxion.FinancialApp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long>
{
    User findUserByUsername(String username);
    //@Query("select id from user ")
    //List<Goals> getGoalsByUser(Integer id);
}
