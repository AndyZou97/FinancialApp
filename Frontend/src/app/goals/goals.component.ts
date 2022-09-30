import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';

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
    this.getGoals();
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
