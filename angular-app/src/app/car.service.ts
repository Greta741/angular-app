import { Injectable } from '@angular/core';
import { Location } from './location';
import { HelpInformation } from './mock-help-information';

@Injectable()
export class CarService {
    carNumber: string;
    userLocation: Location;
    helpLocation: Location;

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
        this.helpLocation = {
            latitude: location.latitude + 0.005,
            longitude: location.longitude + 0.005
        }
    }

    getHelpInformation() {
        return HelpInformation;
    }

    getHelpLocation() {
        return this.helpLocation;
    }

    fakeMovement() {
        if (!this.helpLocation) {
            return;
        }
        const oldLocation = {
            latitude: this.helpLocation.latitude,
            longitude: this.helpLocation.longitude
        }
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                this.helpLocation.latitude = oldLocation.latitude - i*0.00005;
                this.helpLocation.longitude = oldLocation.longitude - i*0.00005;
            }, 300*i);
        }
    }

}