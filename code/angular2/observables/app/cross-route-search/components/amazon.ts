import {Component} from '@angular/core';
import {StateService} from "../services/state-service";

@Component({
    selector: 'amazon',
    template: `<div class="amz">
                <h2 >Amazon component</h2>
               Search criteria: {{searchFor}}
               </div>`,
    styles: ['.amz {background: pink}']
})
export class AmazonComponent {

    searchFor: string;

    constructor(private state: StateService){

        this.searchFor = state.searchCriteria;

        state.stateEvent
            .subscribe(event => this.searchFor = event);
    }
}