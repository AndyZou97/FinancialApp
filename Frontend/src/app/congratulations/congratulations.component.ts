import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import party from "party-js";


@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css']
})
export class CongratulationsComponent implements OnInit {

  public clicked= false;

  constructor(private router: Router) { }
  
  date = new Date();
  dateWeWant = this.date.getMonth() + 1 + "/" + this.date.getDate() + "/" + this.date.getFullYear();
  // time = this.date.getHours() + ":" + this.date.getMinutes();

  ngOnInit(): void {
  }

  goToGoals(){
    this.router.navigate(['/goals']);
  }

  showconfetti(source:any){
 
    party.confetti(source);
   
  }



}
 