import { Component, OnInit } from '@angular/core';
import {ShippingService} from './shipping.service';

@Component({
  selector: 'app-shipping',
  template: `<h1>Shipping Component</h1>
              {{shippingItem}} `,
  styles: []
})
export class ShippingComponent {

  shippingItem: string;

  constructor(private shippingService: ShippingService ) {
    this.shippingItem = this.shippingService.getShippingItem();
  }

}





