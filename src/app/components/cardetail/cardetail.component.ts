  
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cardetail } from 'src/app/models/cardetails';
import { CarImage } from 'src/app/models/carimage';

import { CardetailService } from 'src/app/services/cardetail.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  car: Cardetail 
  carimages:CarImage[]

  dataLoaded = false;
  constructor(private cardetailService: CardetailService,
    private activatedRoute:ActivatedRoute,
    private carimageService:CarimageService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCardetailsByCarId(params["carId"]);
        this.getCarImagesByCarId(params["carId"]);
      }
    })
  }
  getCardetailsByCarId(carId:number) {
    this.cardetailService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.car = response.data[0];
      this.dataLoaded = true;
    });
  }
  getCarImagesByCarId(carId:number){
    this.carimageService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carimages=response.data;
      console.log(response)
    })
  }
}
