import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandComponent } from '../brand/brand.component';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  noFilterClass:string;
  showAll:boolean = false;
  currentBrand:Brand | null=BrandComponent.currentBrand

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  noFilter(){
    if(this.showAll == true){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  setParams(){
    BrandComponent.currentBrand = null;
    this.showAll = true;
  }

  getBrand(){
    this.currentBrand = BrandComponent.currentBrand;
    console.log(this.currentBrand)
    window.location.href = "/cars/brand/" + this.currentBrand?.brandId
  }

}
