import {Component} from '@angular/core';
import {StateService} from "../services/state_service";
import 'rxjs/add/operator/map';

@Component({
    selector: 'amazon',
    template: `<div class="amz">
                <h2 >Amazon books</h2>
               {{searchFor}}
               </div>`,
    styles: ['.amz {background: pink}']
})
export class AmazonComponent {

    searchFor: string = "\u00A0"; // initialize with a non-breaking JS space

    constructor(private state: StateService){

        state.stateEvent
            .map(event => "books containing " +event + " in titles")
            .subscribe(event => this.searchFor = "Will search for " + event);
    }
}