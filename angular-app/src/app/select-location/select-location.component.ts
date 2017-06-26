import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Location } from '../location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
})
export class SelectLocationComponent implements OnInit {

  carNumber: string;
  location: Location;
  zoom: number = 15;

  constructor(
    private carService: CarService,
    private router: Router
    ) {}

  ngOnInit() {
    this.carNumber = this.carService.getCarNumber();
    this.getLocation().then(position => this.setLocation(position)); 
  }

  getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => resolve(position));
    });
  }

  setLocation(position) {
    this.location = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }
  }

  onDragEnd($event) {
    this.location.latitude = $event.coords.lat;
    this.location.longitude = $event.coords.lng;
  }

  onButtonClickNext() {
    if (this.location) {
      this.carService.setUserLocation(this.location);
    }
    this.router.navigateByUrl('/mapinformation');
  }

};
