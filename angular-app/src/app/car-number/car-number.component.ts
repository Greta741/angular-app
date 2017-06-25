import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-number',
  templateUrl: './car-number.component.html',
})
export class CarNumberComponent implements OnInit {

  carNumber: string;
  error: boolean;

  constructor(
    private carService: CarService,
    private router: Router
    ) { 
      this.error = false;
    }

  ngOnInit() {
    this.carNumber = this.carService.getCarNumber();
  }

  onButtonClickNext() {
    if (this.carNumber) { 
      this.carService.setCarNumber(this.carNumber);
      this.router.navigateByUrl('/selectlocation');
    } else {
      this.error = true;
    }
  }

}
