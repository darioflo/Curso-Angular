import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {  

  users: User[]
readonly  API_URL : string

  constructor(private http : HttpClient){
    this.users = []
    this.API_URL = "https://ca30c89fe7df4ae586d2.free.beeceptor.com/api/users/"

  }

  getUsers(){
    return this.http.get<User[]>(this.API_URL)
  }
  getUser(id: number){
    return this.http.get<User>(`${this.API_URL}/${id}`)
  }

  postUser(user : User){
    return this.http.post<User>(this.API_URL,user)
  }

  deleteUser(id: number){
    return this.http.delete<User>(`${this.API_URL}/${id}`)
  }
}
