import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Location } from '../location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.css']
})
export class SelectLocationComponent implements OnInit {

  carNumber: string;
  location: Location;
  zoom: number = 15;
  title: string = 'Your current position';

  constructor(
    private carService: CarService,
    private router: Router
    ) {}

  ngOnInit() {
    this.carNumber = this.carService.getCarNumber();
    this.getLocation().then(location => this.setLocation(location)); 
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
    this.carService.setUserLocation(this.location);
    this.router.navigateByUrl('/mapinformation');
  }

};
