import {Component} from '@angular/core';
import {StateService} from "../services/state_service";

@Component({
    selector: 'product',
    template: `<div class="ebay">
                <h2 >eBay products</h2>
               {{searchFor}}
               </div>`,
    styles: ['.ebay {background: cyan}']
})
export class EbayComponent {
    
    searchFor: string = "\u00A0"; // initialize with a non-breaking JS space

    constructor(private state: StateService){
        
        state.stateEvent.subscribe(event => this.searchFor = "Searching for " + event);

    }
}