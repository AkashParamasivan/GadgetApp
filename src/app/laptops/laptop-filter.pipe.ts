import {Pipe ,PipeTransform } from '@angular/core';
import { Laptop } from '../Model/Laptop';

@Pipe({
    name:'LaptopFilter'
})
export class LaptopFilterPipe implements PipeTransform 
{
    transform(ArrLaptop: Laptop[],Searchtext:string):Laptop[]{
            if(!ArrLaptop|| !Searchtext)
            {
                return ArrLaptop;
            }
            return ArrLaptop.filter(Laptop=>
               Laptop.BrandName.toLowerCase().indexOf(Searchtext.toLowerCase())!==-1);
    }
}