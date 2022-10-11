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
  title = 'Monthly Goal Payments';
  tableData = [
    ['', 0] 
 ];
  options = {
    pieHole:0.4,
    backgroundColor:'#003566',  
    titleTextStyle: {
      color: 'white', },  
    legendTextStyle:{
      color:'white'
    }
  };
  width = 550;
  height = 400;
  totalMonthlyPayment = 0;


  constructor(private goalService:GoalService,
    private router:Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    console.log(this.date.getDate());
    if(localStorage.length == 0){
      this.router.navigate(['signin']);
    }
    this.getGoals();
    console.log(this.goals);
  }


  private getGoals(){
    this.goalService.getGoalList().subscribe(data => {
      this.goals = data;
      this.tableData = [];
      this.totalMonthlyPayment = 0;
      for (let row in this.goals) {
        this.tableData.push([
          this.goals[row].name,
          this.goals[row].monthlyPayment,
        ]);
        this.totalMonthlyPayment += this.goals[row].monthlyPayment;

      }
      console.log(this.tableData);
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
