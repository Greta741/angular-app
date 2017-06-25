import { Injectable } from '@angular/core';
import { Location } from './location';

@Injectable()
export class CarService {
    carNumber: string;
    userLocation: Location;

    getCarNumber(): string {
        return this.carNumber;
    }

    setCarNumber(carNumber: string): void {
        this.carNumber = carNumber;
    }

    getUserLocation(): Location {
        return this.userLocation;
    }

    setUserLocation(location: Location) {
        this.userLocation = location;
    }

}