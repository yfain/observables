import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {NgModule, Component, ElementRef, ViewChild}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import 'rxjs/add/operator/sample';
import {Observable} from "rxjs/Observable";

@Component({
    selector: "app",
    template: `
       <h2>Sharing the same stream</h2>
      <input #myinput type="text" placeholder="Start typing" >
      
      <br> Subscribing to each value: {{data1}}
      <p>
      <br> Subscribing to 3-second samples: {{data2}}
    `
})
class AppComponent {
    @ViewChild('myinput')
    myInputField: ElementRef;

    data1: string;
    data2: string;

    ngAfterViewInit(){

        let keyup$: Observable = Observable.fromEvent(this.myInputField.nativeElement, 'keyup');

        let keyupValue$ = keyup$
            .map(event => event.target.value)
            .share();

        // Subscribe to each keyup
        keyupValue$
            .subscribe(value => this.data1 = value);

        // Subscribe to 3-second samples
        keyupValue$
            .sample(Observable.interval(3000))
            .subscribe(value => this.data2 = value);
    }

}

@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
