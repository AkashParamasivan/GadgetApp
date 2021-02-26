import { Component, OnInit } from '@angular/core';
import { LaptopServiceService } from '../laptop-service.service';
import { Laptop } from '../Model/Laptop';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styles: []
})
export class LaptopsComponent  {

  Searchtext:string;
  welcome:string;

  ArrLaptop:Laptop[];
  constructor(private LaptopService:LaptopServiceService) {
    this.ArrLaptop=this.LaptopService.getLaptops();
    this.welcome="Laptop Details and Specification";

   }


  //   this.welcome="Laptop Details and Specification";

  //   this.Laptop=[
  //     {
  //       ModelName:"B41",
  //       BrandName:"Asus",
  //       Price:35000,
  //       Specification:"4GB RAM ,1TB ROM, Processor:Intel i3 8thgen "
  //     },
  //     {
  //       ModelName:"Macbook air",
  //       BrandName:"Apple",
  //       Price:12000,
  //       Specification:"4GB RAM ,500GB SSD, Processor:radeon 11"
  //     },
  //     {
  //       ModelName:"notebook",
  //       BrandName:"HP",
  //       Price:100000,
  //       Specification:"16GB RAM ,1TB SSD,Processor:Intel i7 8th gen"
  //     },
  //     {
  //       ModelName:"ThinkPad",
  //       BrandName:"Lenovo",
  //       Price:96000,
  //       Specification:"8GB RAM ,2TB ROM, Processor:AMD"
  //     },
  //     {
  //       ModelName:"Vostro",
  //       BrandName:"Dell",
  //       Price:75000,
  //       Specification:"16GB RAM ,1TB ROM, Processor:intel i5 10 gen"
  //     },
  // ]
  // };

 

}
