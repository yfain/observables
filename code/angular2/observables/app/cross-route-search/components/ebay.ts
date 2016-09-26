import {Component} from '@angular/core';
import {StateService} from "../services/state-service";

@Component({
    selector: 'product',
    template: `<div class="ebay">
                <h2 >eBay component</h2>
               Search criteria: {{searchFor}}
               </div>`,
    styles: ['.ebay {background: cyan}']
})
export class EbayComponent {
    
    searchFor: string;

    constructor(state: StateService){

        this.searchFor = state.searchCriteria;
        
        state.stateEvent
            .subscribe(event => this.searchFor = event);

    }
}