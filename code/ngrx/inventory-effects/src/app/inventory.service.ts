import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {of} from "rxjs";
import {throwError} from "rxjs";


@Injectable()
export class InventoryService {

    addProducts(quantity: number): Observable<number> {

        // An HTTP request to the server could go here

        if (quantity < 20) {
            return of(quantity);
        } else {
            return throwError("Refused: Too many products");
        }
    }
}