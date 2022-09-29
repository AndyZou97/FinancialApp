package com.xpanxion.FinancialApp.repository;

import com.xpanxion.FinancialApp.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository  extends JpaRepository<Account, Long> {
}
