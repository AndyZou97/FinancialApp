package com.xpanxion.FinancialApp.model;


import javax.persistence.*;

@Entity
@Table(name = "goals")
public class Goals
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;

    @Column(name = "name")
    private String name;
    @Column(name = "cost")
    private double cost;
    @Column(name = "downPayment")
    private double downPayment;
    @Column(name = "interest")
    private double interest;
    @Column(name = "months")
    private double months;
    @Column(name = "balance")
    private double balance;
    @Column(name = "description")
    private String description;

    @Column(name = "monthlyPayment")
    private double monthlyPayment;


    public Goals()
    {

    }

    public Goals(String name, double cost, double downPayment, double interest, double months, double balance, String description, double monthlyPayment) {
        this.name = name;
        this.cost = cost;
        this.downPayment = downPayment;
        this.interest = interest;
        this.months = months;
        this.balance = balance;
        this.description = description;
        this.monthlyPayment = monthlyPayment;
    }

    public long getId()
    {
        return id;
    }

    public void setId(long id)
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

}