import { Injectable } from '@angular/core';

@Injectable()
export class CarService {
    carNumber: string;

    getCarNumber(): string {
        return this.carNumber;
    }

    setCarNumber(carNumber: string): void {
        this.carNumber = carNumber;
    }

}