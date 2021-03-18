import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { CarImageResponseModel } from '../models/carImageResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44354/api/"

  constructor(private httpClient:HttpClient) { }

  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "fileuploads/GetImgByCarId?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getAllCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "fileuploads/GetAllCarImg"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
