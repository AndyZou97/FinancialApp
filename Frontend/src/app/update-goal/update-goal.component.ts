import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-update-goal',
  templateUrl: './update-goal.component.html',
  styleUrls: ['./update-goal.component.css']
})
export class UpdateGoalComponent implements OnInit {
  id!:number
  goal:Goal = new Goal;
  constructor(private goalService:GoalService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.goalService.getGoalById(this.id).subscribe(data => {
      this.goal = data;
      })
  }

  onSubmit(){
    this.calculateBalance();
    this.calculateMonthlyPayment();
  this.goalService.updateGoal(this.id,this.goal).subscribe(data =>{
    this.router.navigate(['/goals'])
  });
  }

  calculateBalance(){
    this.goal.balance = this.goal.cost - this.goal.downPayment;
    this.goal.balance = parseFloat(this.goal.balance.toFixed(2));
  }
  calculateMonthlyPayment(){
    if(this.goal.interest > 0) {
      this.goal.monthlyPayment = this.goal.cost * ((this.goal.interest/100*Math.pow((1+this.goal.interest/100),this.goal.months))/(Math.pow((1+this.goal.interest/100),this.goal.months) - 1));
    } else {
      this.goal.monthlyPayment = this.goal.cost/this.goal.months;
    }
    this.goal.monthlyPayment = parseFloat(this.goal.monthlyPayment.toFixed(2));
  }
}
