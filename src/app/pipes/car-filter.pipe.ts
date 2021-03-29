import { Pipe, PipeTransform } from '@angular/core';
import { Cardetail } from '../models/cardetails';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: Cardetail[], filterText:string): Cardetail[] {
    filterText =filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:Cardetail)=>c.brandName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
