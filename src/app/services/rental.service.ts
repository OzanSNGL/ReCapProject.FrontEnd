import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalResponseModel } from '../models/rentalResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44354/api/"
  constructor(private httpClient:HttpClient) { }

  getAllRented():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "rentals/getallrented"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
    };
  
  getAllAvailable():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "rentals/getallavailable"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
    };
  
  showRentDetails(rentId:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "rentals/showrentdetails?rentId=" + rentId
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }
  
  addRental(rental:Rental):Observable<ResponseModel>{
    let apiUrl = environment.apiUrl+"rentals/addrental";
    return this.httpClient.post<ResponseModel>(apiUrl,rental)
  }
}
