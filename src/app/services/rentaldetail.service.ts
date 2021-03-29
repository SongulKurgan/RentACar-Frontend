import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rentaldetail } from '../models/rentaldetail';
import { rentaldetailsResponseModel } from '../models/rentaldetailResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class RentaldetailService {
  apiUrl='https://localhost:44352/api/rentals/getallrentaldetails'
  constructor(private httpClient: HttpClient) { }

  getRentalDetails(): Observable<rentaldetailsResponseModel>{
    return this.httpClient.get<ListResponseModel<Rentaldetail>>(this.apiUrl)
  }
  
  addRental(rental: Rentaldetail): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'add';
    console.log(newPath);
    return this.httpClient.post<ResponseModel>(newPath, rental);
  }
}
