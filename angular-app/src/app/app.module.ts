import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { CarNumberComponent } from './car-number/car-number.component';
import { CarService }          from './car.service';

import { AppRoutingModule }     from './app-routing.module';
import { SelectLocationComponent } from './select-location/select-location.component';
import { MapInformationComponent } from './map-information/map-information.component';


@NgModule({
  declarations: [
    AppComponent,
    CarNumberComponent,
    SelectLocationComponent,
    MapInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFo6rptaEK9klhlrh66i1vnuIbWyOZMHw'
    })
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
