import { Injectable } from '@angular/core';
import {Accessories} from 'D:/AssigmentAngular/GadgetApp/src/app/Model/Accessories';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {
  Accessoriesi:Accessories[]=[
    {
      BrandName:"B41",
      AccessoriesName:"Laptop charger",
      Price:1000
    },
    {
      BrandName:"JBL",
      AccessoriesName:"Earphones",
      Price:500
    },
    {
      BrandName:"Philips",
      AccessoriesName:"Speakers",
      Price:10000
    },
    {
      BrandName:"HP",
      AccessoriesName:"Laptop Battery",
      Price:4000
    },
    {
      BrandName:"Pendrive",
      AccessoriesName:"Dell",
      Price:750
    }
  

]
constructor() { }

getAccessories():Accessories[]{
  return this.Accessoriesi;
}
}
