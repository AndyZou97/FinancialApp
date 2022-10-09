import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private subscriptions: Subscription[] = [];



  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void
  {
    if (this.authenticationService.isUserLoggedIn()) {
      this.router.navigateByUrl('/goals');
    } else {
      this.router.navigateByUrl('/signin');
    }
  }


  public onLogin(user: User)

  {
    this.subscriptions.push(
      this.authenticationService.login(user).subscribe(
        {
          next: (response: HttpResponse<User>) => {
            console.log(response);
            console.log(user);
             if (response.body) {
               this.authenticationService.addUserToLocalCache(response.body);
             }
            this.router.navigateByUrl('/goals');
          },
          error: err => {
            console.log(err)
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
