import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { GoalsComponent } from './goals/goals.component';
import { HomeComponent } from './home/home.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UpdateGoalComponent } from './update-goal/update-goal.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'goals', component: GoalsComponent},
  {path: 'learnmore', component: LearnMoreComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: 'addgoal', component: AddGoalComponent},
  {path: 'updategoal/:id', component: UpdateGoalComponent},
  {path: 'goaldetails/:id', component: GoalDetailsComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'updateuser', component: UpdateUserComponent},
  {path: 'congratulations', component: CongratulationsComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
