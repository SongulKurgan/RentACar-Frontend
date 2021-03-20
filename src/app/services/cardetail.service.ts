import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardetail } from '../models/cardetails';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CardetailService {
   apiUrl='https://localhost:44352/api/'
  constructor(private httpClient: HttpClient) { }

  getCarDetails(): Observable<ListResponseModel<Cardetail>>{
     let newUrl=this.apiUrl+"cars/getallcardetails"
    return this.httpClient.get<ListResponseModel<Cardetail>>(newUrl)
  }
  getCarDetailsByCarId(carId:number): Observable<ListResponseModel<Cardetail>>{
    let newUrl=this.apiUrl+"cars/getcardetailsbycarid?carid="+carId
    return this.httpClient.get<ListResponseModel<Cardetail>>(newUrl)
  }

}
