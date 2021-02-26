import {Pipe ,PipeTransform } from '@angular/core';
import { Mobile } from '../Model/Mobile';


@Pipe({
    name:'Mobilefilter'
})
export class MobileFilterPipe implements PipeTransform 
{
    transform(ArrMobile: Mobile[],Searchtext:number):Mobile[]{
        if(!ArrMobile)
        {
        return ArrMobile;
        }
        if(!Searchtext)
        {
        return ArrMobile;
        }
        return ArrMobile.filter(mob=>{return mob.Price<=Searchtext});
        
            
           
    }
}