import {Component} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { RouterModule } from '@angular/router';


import {SearchComponent} from "./components/search";
import {EbayComponent} from './components/ebay';
import {AmazonComponent} from "./components/amazon";
import {StateService} from "./services/state-service";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app',
    template: ` <div class="main">
              <search></search>
              <p>
              
              <a [routerLink]="['/']">eBay</a>
              <a [routerLink]="['/amazon']">Amazon</a>
              <router-outlet></router-outlet>
              </div>`,
              styles: ['.main {background: yellow}']
})

class AppComponent{
}

@NgModule({
    imports: [ BrowserModule, ReactiveFormsModule,
               RouterModule.forRoot([
                {path: '',        component: EbayComponent},
                {path: 'amazon', component: AmazonComponent}])
             ],
    declarations: [ AppComponent, EbayComponent, AmazonComponent, SearchComponent],
    providers:[StateService,
               {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);