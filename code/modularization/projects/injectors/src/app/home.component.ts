import {Component} from '@angular/core';
import {ShippingService} from './shipping/shipping.service';
import {LuxuryService} from './luxury/luxury.service';

@Component({
  selector: 'home',
  template: '<h1 class="home">Home Component</h1>',
  styles: ['.home {background: red}']
})
export class HomeComponent {}



/* export class HomeComponent {
  constructor(luxuryService: LuxuryService) {}
  
  constructor(shippingService: ShippingService) {
    console.log(shippingService.getShippingItem());
  }
} */


