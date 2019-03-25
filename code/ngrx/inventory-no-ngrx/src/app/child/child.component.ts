import { Component} from '@angular/core';
import {InventoryService} from "../inventory.service";

@Component({
  selector: 'app-child',
  template: `      
    <h2>Child component</h2>
    <div *ngIf="state$ | async as stateObject">
        <p>Total quantity: {{stateObject.productQuantity}}
        <p>{{stateObject.error}}
    </div>
  `,
  styles: []
})
export class ChildComponent  {

    state$ = this.inventoryService.getState();
    constructor(private inventoryService: InventoryService) {}
}
