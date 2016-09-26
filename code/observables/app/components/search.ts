import {Component} from '@angular/core';
import { FormControl, ReactiveFormsModule} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';

import {StateService} from "../services/state-service";

@Component({
    selector: "search",
    template: `
       <h2>Find products anywhere</h2>
      <input type="text" placeholder="Enter product" [formControl]="searchInput">
    `
})
export class SearchComponent {

    searchInput: FormControl;

    constructor(private state: StateService){
        this.searchInput = new FormControl('');

        this.searchInput.valueChanges
            .debounceTime(300)
            .do(value => console.log("The user entered " + value))
            .subscribe(searchValue => this.state.searchCriteria = searchValue);
    }
}