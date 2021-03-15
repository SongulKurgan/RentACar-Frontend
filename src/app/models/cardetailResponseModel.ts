import { Cardetail } from "./cardetails";
import { ResponseModel } from "./responseModel";


export interface cardetailResponseModel extends ResponseModel{
    data:Cardetail[]
}