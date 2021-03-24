import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarImage } from 'src/app/models/carImage';
import { BrandService } from 'src/app/services/brand.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands : Brand[]=[];
  carImages:CarImage[]=[]
  imageUrl = environment.BaseImgUrl;
  selectedBrand:number;
  public static currentBrand:Brand | null;
  constructor(private brandService:BrandService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe(val=>{
      if(val instanceof NavigationStart){
        if(val instanceof NavigationStart){
          this.clearCurrentBrand();
        }
      }
    })
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
    })
  }

  setCurrentBrand(brandId:number){
    this.brandService.getBrandsById(brandId).subscribe(response=>{
      BrandComponent.currentBrand = response.data;
    })
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == BrandComponent.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllBrandClass(){
    if(!BrandComponent.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  clearCurrentBrand(){
    BrandComponent.currentBrand = null;
  }

}
