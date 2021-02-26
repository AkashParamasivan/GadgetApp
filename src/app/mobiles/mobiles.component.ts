import { Component, OnInit } from '@angular/core';
import { MobileServiceService } from 'D:/AssigmentAngular/GadgetApp/src/app/mobile-service.service';
import { Mobile } from '../Model/Mobile';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styles: []
})
export class MobilesComponent {
 
  Searchtext:number;
  welcome:string;

  ArrMobile:Mobile[];
  constructor(private MobileService:MobileServiceService) {
    this.ArrMobile=this.MobileService.getMobiles();
    this.welcome="Mobiles Details and Specification";
}

 

}


