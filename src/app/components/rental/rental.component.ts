import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  
  rentals: Rental[] = []
  dataLoaded=false;
  rented=false;

  constructor(private rentalService:RentalService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params['carId']){
        this.showRentDetails(params['carId'])
      }else{
        this.getAllRented()
        this.getAllAvailable()
      }
    })
  }

  getAllRented(){
    this.rentalService.getAllRented().subscribe((response) => {
      this.rentals = response.data;
      this.dataLoaded=true;
    })
  }

  getAllAvailable(){
    this.rentalService.getAllAvailable().subscribe((response) => {
      this.rentals = response.data;
      this.dataLoaded=true;
    })
  }

  showRentDetails(rentId:number){
    this.rentalService.showRentDetails(rentId).subscribe((response) => {
      this.rentals = response.data;
      this.dataLoaded=true;
      this.rented=true;
    })
  }

}
