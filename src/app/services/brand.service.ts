import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44352/api/brands/getall";
  constructor(private httpclient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpclient.get<ListResponseModel<Brand>>(this.apiUrl)
  }
}
