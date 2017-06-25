import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { CarNumberComponent } from './car-number/car-number.component';
import { CarService }          from './car.service';

import { AppRoutingModule }     from './app-routing.module';
import { SelectLocationComponent } from './select-location/select-location.component';

@NgModule({
  declarations: [
    AppComponent,
    CarNumberComponent,
    SelectLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
