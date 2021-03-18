import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { Cardetail } from '../models/cardetails';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44352/api/";
  constructor(private httpClient:HttpClient) { }


  getCarDetails():Observable<ListResponseModel<Cardetail>>{
    let newPath=this.apiUrl+ "cars/getallcardetails"

    return this.httpClient.get<ListResponseModel<Cardetail>>(newPath);
  }
  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<Cardetail>>{
    let newPath=this.apiUrl+ "cars/getbybrand?brandId="+brandId

    return this.httpClient.get<ListResponseModel<Cardetail>>(newPath);
  }

  getCarDetailsByColor(colorId:number):Observable<ListResponseModel<Cardetail>>{
    let newPath=this.apiUrl+ "cars/getbycolor?colorId="+colorId

    return this.httpClient.get<ListResponseModel<Cardetail>>(newPath);
  }

  

}
