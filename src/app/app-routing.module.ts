import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserComponent } from './components/user/user.component';
import { RentalService } from './services/rental.service';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"users", component:UserComponent},
  {path:"cars/:carId", component:CarComponent},
  {path: "cars/cardetail/:carId", component:CarDetailComponent},
  {path: "cars/carimage/:carId", component:CarimageComponent},
  {path: "rents/rentdetails/:carId", component:RentalComponent},
  {path: "rents/showall", component:RentalComponent},
  {path: "addcars", component:CarAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
