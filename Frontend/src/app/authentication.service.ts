import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpResponse} from "@angular/common/http";
import { User } from './user';
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';
import { GoalService } from './goal.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseApi: string = environment.apiBaseUrl;

  constructor(private http: HttpClient, private goalService: GoalService) { }

  public login(user: User): Observable<HttpResponse<any>>
  {
    return this.http.post<HttpResponse<any>>(`${this.baseApi}/signin`, user, {observe: 'response'});
  }

   public addUserToLocalCache(user: User): void
   {
     localStorage.setItem("user", JSON.stringify(user));
     localStorage.setItem("username", JSON.stringify(user?.username));
     localStorage.setItem("id", JSON.stringify(user?.id));
     localStorage.setItem("role", JSON.stringify(user?.role));
   }

   public clearCache(): void{
    localStorage.clear();
   }

  public isUserLoggedIn(): boolean {
    let user = localStorage.getItem("user");
    if(user === null)
    {
      return false
    }
    return true
  }
}