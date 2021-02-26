import { Injectable } from '@angular/core';
import {Mobile} from 'D:/AssigmentAngular/GadgetApp/src/app/Model/Mobile';

@Injectable({
  providedIn: 'root'
})
export class MobileServiceService {

  Mobiles:Mobile[]=[
    {
      ModelName:"F1",
      BrandName:"POCO",
      Price:20000,
      Specification:"6GB RAM ,128GB ROM, Processor:Snapdragon 845,Camera:18mp front,48+12mp back "
    },
    {
      ModelName:"iphone 11",
      BrandName:"Apple",
      Price:65000,
      Specification:"4GB RAM ,64GB ROM, Processor:A11 bionic,Camera:8mp front,48mp back"
    },
    {
      ModelName:"Razor",
      BrandName:"Motorola",
      Price:100000,
      Specification:"6GB RAM ,128GB ROM,Processor:Snapdragon 855,Camera:18mp front,48+12+2mp back"
    },
    {
      ModelName:"S10",
      BrandName:"Samsung",
      Price:96000,
      Specification:"8GB RAM ,128GB ROM, Processor:Snapdragon 855,Camera:18mp front,64+12mp back"
    },
    {
      ModelName:"P20",
      BrandName:"Huawei",
      Price:75000,
      Specification:"8GB RAM ,128GB ROM, Processor:Hirin silicon 910,Camera:18mp front,64+12mp back"
    },

]
constructor() { }

getMobiles():Mobile[]{
  return this.Mobiles;
}
}
