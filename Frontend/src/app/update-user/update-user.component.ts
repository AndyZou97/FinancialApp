import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
 


  user: User = new User();

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.updateUser(this.user.id, this.user).subscribe( data =>{
      this.router.navigate(['/goals']);
    },
    
    error => console.log(error));
  }

  
  onSubmit(){
    this.saveUser();

  }
}