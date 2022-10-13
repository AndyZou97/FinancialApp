package com.xpanxion.FinancialApp.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import java.io.Serializable;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Entity
@Table(name = "goals")
public class Goals implements Serializable
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String name;
    private double cost;
    private double downPayment;
    private double interest;
    private double months;
    private double balance;
    private String description;

    private double monthlyPayment;



    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    public Goals()
    {

    }

    public Goals(String name, double cost, double downPayment, double interest, double months, double balance, String description, double monthlyPayment, User user) {
        this.name = name;
        this.cost = cost;
        this.downPayment = downPayment;
        this.interest = interest;
        this.months = months;
        this.balance = balance;
        this.description = description;
        this.monthlyPayment = monthlyPayment;
        this.user = user;
    }

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public double getCost()
    {
        return cost;
    }

    public void setCost(double cost)
    {
        this.cost = cost;
    }

    public double getDownPayment()
    {
        return downPayment;
    }

    public void setDownPayment(double downPayment)
    {
        this.downPayment = downPayment;
    }

    public double getInterest()
    {
        return interest;
    }

    public void setInterest(double interest)
    {
        this.interest = interest;
    }

    public double getMonths()
    {
        return months;
    }

    public void setMonths(double months)
    {
        this.months = months;
    }

    public double getBalance()
    {
        return balance;
    }

    public void setBalance(double balance)
    {
        this.balance = balance;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

    public double getMonthlyPayment()
    {
        return monthlyPayment;
    }

    public void setMonthlyPayment(double monthlyPayment)
    {
        this.monthlyPayment = monthlyPayment;
    }
    @JsonIgnore
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

