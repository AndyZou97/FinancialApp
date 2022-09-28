import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {

  goal: Goal = new Goal();
  constructor(private goalService: GoalService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveGoal(){
    this.goalService.createGoal(this.goal).subscribe( data =>{
      console.log(data);
      this.goToGoalList();
    },
    error => console.log(error));
  }

  goToGoalList(){
    this.router.navigate(['/goals']);
  }
  
  onSubmit(){
    console.log(this.goal);
    this.saveGoal();
  }
}
