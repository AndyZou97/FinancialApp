import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from './goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private httpClient:HttpClient) { }

  getGoalList(): Observable<Goal[]>{
    return this.httpClient.get<Goal[]>("http://localhost:8080/api/v1/goals");
  }
  createGoal(id:number, Goal:Goal):Observable<any>{
    console.log(id);
    return this.httpClient.post("http://localhost:8080/api/v1/users/" + "1"+ "/goals",Goal);
  }
  getGoalById(id:number): Observable<Goal>{
    return this.httpClient.get<Goal>("http://localhost:8080/api/v1/goals/"+id)
  }
  updateGoal(id:number,Goal:Goal): Observable<any>{
    return this.httpClient.put("http://localhost:8080/api/v1/goals/"+id,Goal);
  }
  deleteGoal(id:number): Observable<any>{
    return this.httpClient.delete("http://localhost:8080/api/v1/goals/"+id)
  }
}
