import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44352/api/brands/getall";
  constructor(private httpclient:HttpClient) { }

  getBrands():Observable<BrandResponseModel>{
    return this.httpclient.get<BrandResponseModel>(this.apiUrl)
  }
}
