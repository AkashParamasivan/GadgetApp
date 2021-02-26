import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LaptopFilterPipe } from './laptops/laptop-filter.pipe';
import { MobileFilterPipe } from './mobiles/Mobile-filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LaptopFilterPipe,
    MobileFilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
