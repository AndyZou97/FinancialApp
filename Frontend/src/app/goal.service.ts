import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from './goal';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private httpClient:HttpClient) { }

  getGoalList(): Observable<Goal[]>{
    var currentUser = window.localStorage.getItem('id');
    return this.httpClient.get<Goal[]>("http://localhost:8080/users/" + currentUser);

  }
  createGoal(id:number, Goal:Goal):Observable<any>{
    var currentUser = window.localStorage.getItem('id');
    console.log("Made goal for user " + currentUser);
    return this.httpClient.post("http://localhost:8080/api/v1/users/" + currentUser + "/goals",Goal);
  }
  getGoalById(id:number): Observable<Goal>{
    return this.httpClient.get<Goal>("http://localhost:8080/api/v1/goals/"+id)
  }
  updateGoal(id:number,Goal:Goal): Observable<any>{
    var currentUser = window.localStorage.getItem('id');
    return this.httpClient.put("http://localhost:8080/api/v1/users/"+ currentUser + "/goals/" +id,Goal);
  }
  deleteGoal(id:number): Observable<any>{
    return this.httpClient.delete("http://localhost:8080/api/v1/goals/"+id)
  }
}
