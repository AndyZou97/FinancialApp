import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GoalsComponent } from './goals/goals.component';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UpdateGoalComponent } from './update-goal/update-goal.component';
import { ViewGoalComponent } from './view-goal/view-goal.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { FormsModule } from '@angular/forms';


import { GoogleChartsModule } from 'angular-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    GoalsComponent,
    AddGoalComponent,
    CongratulationsComponent,
    LearnMoreComponent,
    AboutUsComponent,
    ContactUsComponent,
    UpdateGoalComponent,
    ViewGoalComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    GoalDetailsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
