import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarImage } from '../models/carimage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {
  apiUrl = "https://localhost:44352/api/";
  constructor(private httpClient:HttpClient) { }

  getCarImages(){
    let newPath=this.apiUrl+ "carimages/getall";

    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImagesByCarId(carId:number){
    let newPath=this.apiUrl+ "carimages/getbycar?id=" + carId;

    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
