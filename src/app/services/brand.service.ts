import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../models/brand';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44354/api/"
  constructor(private HttpClient : HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + "brands/getallbrands"
    return this.HttpClient.get<ListResponseModel<Brand>>(newPath)
    }

  getBrandsById(brandId:number):Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + "brands/getbrandsbyId?brandId=" + brandId
    return this.HttpClient.get<ListResponseModel<Brand>>(newPath)
    }
}
