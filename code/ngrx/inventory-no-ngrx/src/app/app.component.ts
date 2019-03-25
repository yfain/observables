import {Component} from '@angular/core';
import {InventoryService} from './inventory.service';

@Component({
    selector: 'app-root',
    template: `
    <h2>Add products (no ngrx)</h2>
    <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
      Enter quantity: <input type="number" name="quantity" ngModel>
      <button type="submit">Add Products</button>
    </form>
    <div *ngIf="state$ | async as stateObject">
      <p>Total quantity: {{stateObject.productQuantity}}
      <p>{{stateObject.error}}
    </div>

    <app-child></app-child>
    `
})
export class AppComponent {

    state$ = this.inventoryService.getState();
    constructor(private inventoryService: InventoryService) {}

    onSubmit({quantity}) {
        this.inventoryService.addProducts(parseInt(quantity));
    }
}
