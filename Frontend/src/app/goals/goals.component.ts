import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType } from 'angular-google-charts';
import { AuthenticationService } from '../authentication.service';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';



@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  date = new Date();
  firstName = (localStorage.getItem("firstname")!) + "'s";
  goals!:Goal[];
  pieChart = ChartType.PieChart
  title1 = 'Monthly Goal Payments';
  title2 = 'Balance';
  tableData1 = [['', 0]];
  tableData2 = [['', 0]];
  options = {
    pieHole:0.4,
    backgroundColor:'#003566',  
    titleTextStyle: {
      color: 'white', },  
    legendTextStyle:{
      color:'white'
    }
  };
  width = 475;
  height = 300;
  totalMonthlyPayment = 0;
  totalBalance = 0;


  constructor(private goalService:GoalService,
    private router:Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(localStorage.length == 0){
      this.router.navigate(['signin']);
    }
    this.getGoals();
    this.totalMonthlyPayment = parseFloat(this.totalMonthlyPayment.toFixed(2));
    this.totalBalance = parseFloat(this.totalBalance.toFixed(2));
    console.log(this.goals);
  }

  getName():string{
    return (localStorage.getItem("firstname")!);
  }
 


  private getGoals(){
    this.goalService.getGoalList().subscribe(data => {
      this.goals = data;
      this.tableData1 = [];
      this.tableData2 = [];
      this.totalMonthlyPayment = 0;
      this.totalBalance = 0;
      for (let row in this.goals) {
        this.tableData1.push([
          this.goals[row].name,
          this.goals[row].monthlyPayment,
        ]);
        this.tableData2.push([
          this.goals[row].name,
          this.goals[row].balance,
        ]);
        this.totalMonthlyPayment += this.goals[row].monthlyPayment;
        this.totalBalance += this.goals[row].balance;

      }
    })
  }

  updateGoal(id:number){
    this.router.navigate(['updategoal',id])

  }
  deleteGoal(id:number){
    this.goalService.deleteGoal(id).subscribe(data =>{
      this.getGoals();
    })

  }

  completeGoal(id:number){
    this.goalService.deleteGoal(id).subscribe(data =>{
      this.getGoals();
      this.router.navigate(['congratulations']);
    })

  }

  goalDetails(id:number){
    this.router.navigate(['goaldetails',id])

  }

  goToAddGoal(){
    this.router.navigate(['addgoal'])
  }

  logout(){
    this.authenticationService.clearCache();
    this.router.navigate(['signin'])               
    
  }

}
