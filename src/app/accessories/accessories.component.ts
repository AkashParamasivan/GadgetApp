import { Component, OnInit } from '@angular/core';
import { AccessoriesService } from '../accessories.service';
import { Accessories } from '../Model/Accessories';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styles: []
})
export class AccessoriesComponent {

  welcome:string;

  ArrAccess:Accessories[];
  constructor(public AccessorieService:AccessoriesService) {
    this.ArrAccess=this.AccessorieService.getAccessories();
    this.welcome="Accessories Details";

   }

}
