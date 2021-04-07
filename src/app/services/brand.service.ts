import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44352/api/";
  constructor(private httpclient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpclient.get<ListResponseModel<Brand>>(this.apiUrl+"brands/getall")
  }
  
  add(brand:Brand):Observable<ResponseModel>{
    return this.httpclient.post<ResponseModel>(this.apiUrl+"brans/add",brand)
  }
  
}
