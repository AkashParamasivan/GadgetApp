import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { AccessoriesComponent } from './accessories/accessories.component';


const routes:Routes=[
  {path:'Mobiles', component:MobilesComponent},
  {path:'Laptops', component:LaptopsComponent},
  {path:'Accessories', component:AccessoriesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MobilesComponent,LaptopsComponent,AccessoriesComponent]
