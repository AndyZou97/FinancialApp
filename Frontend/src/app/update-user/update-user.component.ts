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
      var currentUser = window.localStorage.getItem('id');
      console.log(currentUser);

      localStorage.removeItem('firstname');
      localStorage.removeItem('username');
      localStorage.removeItem('user');
      localStorage.setItem("user", JSON.stringify(this.user));
      localStorage.setItem("username", JSON.stringify(this.user?.username));
      localStorage.setItem("firstname", (this.user?.firstName));
      this.router.navigate(['/goals']);
    },
    
    error => console.log(error));
  }

  passwordTooShort(): boolean{
    if(this.user.password.length < 7){
      return true;
    }
    else{
      return false;
    
    }
  }

  passwordNoSpecialChar(): boolean{
    var re = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return !re.test(this.user.password)
  }

  passwordNoUpperAndLower(): boolean{
    var re = /([A-Z].*[a-z]|[a-z].*[A-Z])/;
    return !re.test(this.user.password)
  }

  
  onSubmit(){
    if(!this.passwordTooShort() && !this.passwordNoUpperAndLower() &&!this.passwordNoSpecialChar()){

      this.saveUser();
    
    }

  }
}