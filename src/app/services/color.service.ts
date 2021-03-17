import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44354/api/"
  constructor(private httpClient:HttpClient) { }

  getAllColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "colors/getallcolors"
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  }

  getColorsById(colorId:number):Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "colors/getcolorsbyId?id=" + colorId
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  }
}
