  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cardetailResponseModel } from '../models/cardetailResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CardetailService {
   apiUrl='https://localhost:44352/api/cars/getallcardetails'
  constructor(private httpClient: HttpClient) { }

  getCarDetails(): Observable<cardetailResponseModel>{
    return this.httpClient.get<cardetailResponseModel>(this.apiUrl)
  }
}
