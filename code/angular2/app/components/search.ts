import {Component} from '@angular/core';
import {Control,} from '@angular/common';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';

import {StateService} from "../services/state_service";

@Component({
    selector: "search",
    template: `
       <h2>Find products anywhere</h2>
      <input type="text" placeholder="Enter product" [ngFormControl]="searchInput">
    `
})
export class SearchComponent {

    searchInput: Control;

    constructor(private state: StateService){
        this.searchInput = new Control('');

        this.searchInput.valueChanges
            .debounceTime(300)
            .do(value => console.log("The user entered " + value))
            .subscribe(searchValue => this.state.searchCriteria = searchValue);
    }
}