import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars: Car[]
  carImages: CarImage[]
  imagePaths: string[]
  imageUrl = environment.BaseImgUrl

  constructor(private carService: CarService, private ActivatedRoute:ActivatedRoute, private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetails(params['carId']),
        this.getImagesByCarId(params['carId'])
      }
      this.getAllCarImages()
    });
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data
    });
  }

  getImagesByCarId(carId:number){
    this.carImageService.getCarImages(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getCarDetails(carId:number){
    this.carService.getCarDetail(carId).subscribe((response) => {
      this.cars = response.data;
    })
  }

  getAllCarImages(){
    this.carImageService.getAllCarImages().subscribe((response) => {
      this.carImages = response.data;
    })
  }

}
