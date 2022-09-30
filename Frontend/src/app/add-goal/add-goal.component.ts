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
    this.calculateBalance();
    this.calculateMonthlyPayment();
    console.log(this.goal.userId+"TEST");
    console.log(this.goal);
    this.saveGoal();

  }
  calculateBalance(){
    this.goal.balance = this.goal.cost - this.goal.downPayment;
  }
  calculateMonthlyPayment(){
    this.goal.userId = this.goal.cost * ((this.goal.interest*Math.pow((1+this.goal.interest),this.goal.months))/(Math.pow((1+this.goal.interest),this.goal.months) - 1))
  }


}
