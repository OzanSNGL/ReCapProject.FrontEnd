import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { UserComponent } from './components/user/user.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import { CarimageComponent } from './components/carimage/carimage.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandPipePipe } from './pipes/brandPipe/brand-pipe.pipe';
import { VatAddedPipe } from './pipes/carPipe/vat-added.pipe';
import { FilterPipePipe } from './pipes/carPipe/filter-pipe.pipe';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    UserComponent,
    CarDetailComponent,
    VatAddedPipe,
    FilterPipePipe,
    CarimageComponent,
    RentalComponent,
    CarAddComponent,
    BrandPipePipe,
    LeftSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
