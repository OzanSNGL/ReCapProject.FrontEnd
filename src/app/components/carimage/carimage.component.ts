import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {

  carimages:CarImage[]=[]

  constructor(private carimageService:CarImageService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params['carId']){
        this.getImgByCarId(params['carId'])
      }
    })
  }

  getImgByCarId(carId:number){
    this.carimageService.getCarImages(carId).subscribe((response)=>{
      this.carimages=response.data;
    })
  }

}
