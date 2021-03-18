import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardetail } from '../models/cardetails';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CardetailService {
   apiUrl='https://localhost:44352/api/cars/getallcardetails'
  constructor(private httpClient: HttpClient) { }

  getCarDetails(): Observable<ListResponseModel<Cardetail>>{
    return this.httpClient.get<ListResponseModel<Cardetail>>(this.apiUrl)
  }
}
