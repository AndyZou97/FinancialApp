import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:8080/api/v1/users");
  }
  createUser(User:User):Observable<any>{
    return this.httpClient.post("http://localhost:8080/register",User);
  }
  getUserById(id:number): Observable<User>{
    return this.httpClient.get<User>("http://localhost:8080/api/v1/users/"+id)
  }
  updateUser(id:number,User:User): Observable<any>{
    var currentUser = window.localStorage.getItem('id');
    return this.httpClient.put("http://localhost:8080/users/"+currentUser,User);
  }
  deleteUser(id:number): Observable<any>{
    var currentUser = window.localStorage.getItem('id');
    return this.httpClient.delete("http://localhost:8080/api/v1/users/"+currentUser)
  }
}
