import { Injectable } from '@angular/core';
import {Laptop} from 'D:/AssigmentAngular/GadgetApp/src/app/Model/Laptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopServiceService {

    Laptops:Laptop[]=[
      {
        ModelName:"B41",
        BrandName:"Asus",
        Price:35000,
        Specification:"4GB RAM ,1TB ROM, Processor:Intel i3 8thgen "
      },
      {
        ModelName:"Macbook air",
        BrandName:"Apple",
        Price:12000,
        Specification:"4GB RAM ,500GB SSD, Processor:radeon 11"
      },
      {
        ModelName:"notebook",
        BrandName:"HP",
        Price:100000,
        Specification:"16GB RAM ,1TB SSD,Processor:Intel i7 8th gen"
      },
      {
        ModelName:"ThinkPad",
        BrandName:"Lenovo",
        Price:96000,
        Specification:"8GB RAM ,2TB ROM, Processor:AMD"
      },
      {
        ModelName:"Vostro",
        BrandName:"Dell",
        Price:75000,
        Specification:"16GB RAM ,1TB ROM, Processor:intel i5 10 gen"
      },
  ]
  constructor() { }

  getLaptops():Laptop[]{
    return this.Laptops;
  }
  
}
