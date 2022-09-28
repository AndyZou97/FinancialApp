import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {

  id!:number
  goal!:Goal

  constructor(private route:ActivatedRoute, private goalService:GoalService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.goalService.getGoalById(this.id).subscribe(data => {
      this.goal = data;
    })
  }
}
