import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private goalService:GoalService,
    private router:Router) { }

  ngOnInit(): void {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
    this.getGoals();
  }

  drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Mushrooms', 30],
      ['Onions', 1],
      ['Olives', 1], 
      ['Zucchini', 1],
      ['Pepperoni', 2]
    ]);
    var options = {
      title: "Monthly Payments",
      // colors: ["blue","red","yellow"]
    }
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
  }

  private getGoals(){
    this.goalService.getGoalList().subscribe(data => {
      this.goals = data
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
