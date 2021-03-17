import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44354/api/"
  constructor(private httpClient:HttpClient) { }

  getAllRented():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "users/getallrented"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
    };
  
  getAllAvailable():Observable<RentalResponseModel>{
    let newPath = this.apiUrl + "users/getallavailable"
    return this.httpClient.get<RentalResponseModel>(newPath)
    };
}
