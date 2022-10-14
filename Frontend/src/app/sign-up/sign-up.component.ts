import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 


  user: User = new User();

  constructor(private userService: UserService,
    private router: Router) { }


  
  ngOnInit(): void {
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe( data =>{
      this.router.navigate(['/goals']);
    },
    
    error => console.log(error));
  }

  
  onSubmit(){
    if(!this.passwordTooShort() && !this.passwordNoUpperAndLower() &&!this.passwordNoSpecialChar()){

      this.saveUser();
    
    }
    

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
}