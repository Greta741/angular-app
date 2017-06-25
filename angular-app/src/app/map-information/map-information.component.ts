import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Location } from '../location';

@Component({
  selector: 'app-map-information',
  templateUrl: './map-information.component.html',
  styleUrls: ['./map-information.component.css']
})
export class MapInformationComponent implements OnInit {

  helpInformation;
  location: Location;
  zoom: number = 14;
  helpLocation: Location;
  iconUrl: string = 'assets/dot.png';

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.helpInformation = this.carService.getHelpInformation();
    this.location = this.carService.getUserLocation();
    this.helpLocation = this.carService.getHelpLocation();
    this.carService.fakeMovement();
  }

}
