import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';
import { User } from '../user';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {
  user: User = new User();


  goal: Goal = new Goal();
  constructor(private goalService: GoalService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveGoal(){
    this.goalService.createGoal(this.user.id,this.goal).subscribe( data =>{
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
    this.saveGoal();

  }
  calculateBalance(){
    this.goal.balance = this.goal.cost - this.goal.downPayment;
    this.goal.balance = parseFloat(this.goal.balance.toFixed(2));
  }
  calculateMonthlyPayment(){
    if(this.goal.interest > 0) {
      this.goal.monthlyPayment = this.goal.balance * ((this.goal.interest/100*Math.pow((1+this.goal.interest/100),this.goal.months))/(Math.pow((1+this.goal.interest/100),this.goal.months) - 1));
    } else {
      this.goal.monthlyPayment = this.goal.balance/this.goal.months;
    }
    this.goal.monthlyPayment = parseFloat(this.goal.monthlyPayment.toFixed(2));
  }
}
