import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType } from 'angular-google-charts';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';

declare var google:any;

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

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

  constructor(private goalService:GoalService,
    private router:Router) { }

  ngOnInit(): void {
    this.getGoals();
  }


  private getGoals(){
    this.goalService.getGoalList().subscribe(data => {
      this.goals = data;
      this.tableData = [];
      console.log(this.goals);
      for (let row in this.goals) {
        this.tableData.push([
          this.goals[row].name,
          this.goals[row].monthlyPayment,
        ]);
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

  goalDetails(id:number){
    this.router.navigate(['goaldetails',id])

  }

  goToAddGoal(){
    this.router.navigate(['addgoal'])
  }

}
