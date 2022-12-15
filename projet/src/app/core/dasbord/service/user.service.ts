import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http :HttpClient) { }

  getUser(): Observable<User[]>{
    return this._http.get<User[]>("http://localhost:3000/api/v1/user")
  }
  deletUser(id:string): Observable<string>{
    return this._http.delete<string>("http://localhost:3000/api/v1/user/"+id)
  }
  postUser(data:User): Observable<string>{
    return this._http.post<string>("http://localhost:3000/api/v1/user",data)
  }

  apdateUser(data:any , id :string): Observable<string>{
    return this._http.patch<string>("http://localhost:3000/api/v1/user/"+id,data)
  }
}
