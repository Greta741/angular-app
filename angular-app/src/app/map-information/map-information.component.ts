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
  helpLocation: Location;
  zoom: number = 14;
  iconUrl: string = 'assets/dot.png';
  calling: boolean = false;
  callText = 'Skambinti';

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.helpInformation = this.carService.getHelpInformation();
    this.location = this.carService.getUserLocation();
    this.helpLocation = this.carService.getHelpLocation();
    this.carService.fakeMovement();
  }

  makeCall() {
    this.calling = true;
    this.callText = 'Skambinama...';
  }

}
