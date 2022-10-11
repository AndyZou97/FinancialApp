import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';


@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }


  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;

  

}
