import { Injectable } from '@angular/core';
import { Location } from './location';
import { HelpInformation } from './mock-help-information';

@Injectable()
export class CarService {
    carNumber: string;
    userLocation: Location;
    helpLocation: Location;
    helpInformation;

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
        const oldLocation = this.helpLocation;
        for (let i = 1; i < 100; i++) {
            setTimeout(() => {
                this.helpLocation.latitude = oldLocation.latitude - i*0.000001;
                this.helpLocation.longitude = oldLocation.longitude - i*0.000001;
            }, 300*i);
        }
    }

}