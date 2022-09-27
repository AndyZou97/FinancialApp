package com.xpanxion.FinancialApp.repository;

import com.xpanxion.FinancialApp.model.Goals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GoalsRepository extends JpaRepository<Goals, Long>
{

}