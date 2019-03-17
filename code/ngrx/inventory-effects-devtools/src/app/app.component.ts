import { Component } from '@angular/core';
import {AddProduct} from './store/actions';
import {Store, select} from "@ngrx/store";
import {getQuantity, getErrorMessage} from "./store/selectors";

@Component({
    selector: 'app-root',
    template: `
        <h2>Add products (ngrx)</h2>
        <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
            Enter quantity: <input type="number" name="quantity" ngModel>
            <button type="submit">Add Products</button>
        </form>
        <p>Total quantity: {{totalQuantity$ | async}}
        <p>{{errorMessage$ | async}}
    `
})
export class AppComponent {

    totalQuantity$ = this.store.pipe(select(getQuantity));
    errorMessage$ = this.store.pipe(select(getErrorMessage));

    constructor(private store: Store<any>) {}

    onSubmit({quantity}) {
        this.store.dispatch(new AddProduct({quantity: parseInt(quantity)}));

    }
}