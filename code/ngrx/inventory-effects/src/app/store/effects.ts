//import 'rxjs/add/observable/of';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ADD_PRODUCT, AddProduct, AddProductFailure, AddProductSuccess} from './actions';
import {InventoryService} from "../inventory.service";
import {of} from "rxjs";

@Injectable()
export class InventoryEffects {

    constructor(private actions$: Actions,
                private inventoryService: InventoryService) {}

    @Effect()
    addProducts$ = this.actions$
        .pipe(
            ofType(ADD_PRODUCT),
            map((action: AddProduct) => action.payload),
            switchMap(({quantity}) => this.inventoryService.addProducts(quantity)
                .pipe(
                 map(quantity => new AddProductSuccess({quantity})),
                 catchError(errorMessage => of(new AddProductFailure({errorMessage})))
                )
            )
        );
}
