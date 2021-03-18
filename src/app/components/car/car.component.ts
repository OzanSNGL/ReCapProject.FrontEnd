import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http'
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]
  currentCar:Car
  carImages:CarImage[]
  dataLoaded = false;
  filterText = ""
  imageUrl = environment.BaseImgUrl

  constructor(private carService:CarService, private carImageService:CarImageService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }else{
        this.getAllCarDetails()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  setCurrentCar(car:Car){
    this.currentCar = car;
  }

  getCurrentCarClass(car:Car){
    if(car == this.currentCar){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllCarClass(){
    if(!this.currentCar){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getCarsByColor(brandId:number) {
    this.carService.getCarsByColor(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getImagesByCarId(carId:number){
    this.carImageService.getCarImages(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getAllCarDetails(){
    this.carService.getAllCarDetail().subscribe((response)=>{
      this.cars = response.data;
    })
  }
}
