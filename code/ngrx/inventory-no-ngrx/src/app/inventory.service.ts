import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {State} from './state';

@Injectable()
export class InventoryService {

    private stateSubject: BehaviorSubject<State> =
        new BehaviorSubject({productQuantity: 0, error: ''}); // initial state

    addProducts(quantity: number): void {

        let state: State = this.stateSubject.value;

        // An HTTP request to the server could go here

        if (quantity < 20) {
            state = {
                ...state,
                productQuantity: state.productQuantity + quantity,
                error: ''
            };
        } else {
            state = {
                ...state,
                error: 'Refused: Too many products'
            };
        }

        console.log(`Pushing state to subscribers: ${JSON.stringify(state)}`);

        this.stateSubject.next(state);
    }

    getState(): Observable<State> {
        return this.stateSubject.asObservable();  // to prevent subscribers from using next()
    }
}
