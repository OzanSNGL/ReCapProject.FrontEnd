import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { User } from '../models/user';
import { UserResponseModel } from '../models/userResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44354/api/"
  constructor(private HttpClient:HttpClient) { }

  getUsers():Observable<UserResponseModel>{
    let newPath = this.apiUrl + "users/getallusers"
    return this.HttpClient.get<UserResponseModel>(newPath)
    };
}
