import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rentaldetail } from '../models/rentaldetail';
import { rentaldetailsResponseModel } from '../models/rentaldetailResponseModel';


@Injectable({
  providedIn: 'root'
})
export class RentaldetailService {
  apiUrl='https://localhost:44352/api/rentals/getallrentaldetails'
  constructor(private httpClient: HttpClient) { }

  getRentalDetails(): Observable<rentaldetailsResponseModel>{
    return this.httpClient.get<ListResponseModel<Rentaldetail>>(this.apiUrl)
  }
}
