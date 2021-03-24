import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], carName:string|null): Car[] {
    let filtered;
    filtered = value;
    if(carName){
      filtered = filtered.filter(p=>p.carName.toLocaleLowerCase().indexOf(carName.toLocaleLowerCase()) !== -1);
    }
    return filtered;
  }
}
