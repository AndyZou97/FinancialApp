import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router:Router, 
    private authenticationService: AuthenticationService, 
    public dialog: MatDialog
    ) { }

  firstName = (localStorage.getItem("firstname")!);

  getName():string{
    return (localStorage.getItem("firstname")!);
  }
 
  getStatus():boolean{
    if(localStorage.length == 0){
      return false;
    }
    return true;
  }


  logout(){
    this.authenticationService.clearCache();
    this.router.navigate(['signin']);             
    
  }

  title = 'Doubloon';

  openDialog() {
    this.dialog.open(DialogExampleComponent);
  }
}
