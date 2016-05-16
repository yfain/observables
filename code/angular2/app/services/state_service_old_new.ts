import {EventEmitter, SimpleChange, Injectable} from "@angular/core";

export class StateServiceChange{

    private _searchCriteria: string;

    stateEvent: EventEmitter<SimpleChange> = new EventEmitter();

    set searchCriteria(value: string) {

        let oldValue = !this._searchCriteria?"undefined":this._searchCriteria ;

        let changeObject = new SimpleChange(oldValue, value);

        this._searchCriteria = value;

        this.stateEvent.emit(changeObject);

        console.log(`StateService emitting ${JSON.stringify(changeObject)}`);
    }
}
