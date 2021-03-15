import { Rentaldetail } from './rentaldetail';
import { ResponseModel } from './responseModel';


export interface rentaldetailsResponseModel extends ResponseModel {
  data: Rentaldetail[];
}