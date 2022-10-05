import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendMail(){
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let subject = (document.getElementById("subject") as HTMLInputElement).value;
    let message = (document.getElementById("message") as HTMLInputElement).value;


    // window.location.href="mailto:quinndigi@gmail.com?subject="subject+"&name="+name"&email"+email"&message"+message;

  }

}
