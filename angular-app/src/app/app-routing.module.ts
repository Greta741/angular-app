import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarNumberComponent }   from './car-number/car-number.component';
import { SelectLocationComponent }   from './select-location/select-location.component';
import { MapInformationComponent }   from './map-information/map-information.component';

const routes: Routes = [
  { path: '', redirectTo: '/carnumber', pathMatch: 'full' },
  { path: 'carnumber',  component: CarNumberComponent },
  { path: 'selectlocation', component: SelectLocationComponent },
  { path: 'mapinformation', component: MapInformationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}