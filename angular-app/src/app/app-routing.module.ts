import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarNumberComponent }   from './car-number/car-number.component';
import { SelectLocationComponent }   from './select-location/select-location.component';

const routes: Routes = [
  { path: '', redirectTo: '/carnumber', pathMatch: 'full' },
  { path: 'carnumber',  component: CarNumberComponent },
  { path: 'selectlocation', component: SelectLocationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}