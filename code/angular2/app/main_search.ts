import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, provide} from '@angular/core';

import {SearchComponent} from "./components/search";
import {EbayComponent} from './components/ebay';
import {AmazonComponent} from "./components/amazon";


import {Routes,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
import {StateService} from "./services/state_service";
import {StateServiceChange} from "./services/state_service_old_new";

@Component({
    selector: 'app',
    template: ` <div class="main">
              <search></search>
              <p>
              
              <a [routerLink]="['/']">eBay</a>
              <a [routerLink]="['/amazon']">Amazon</a>
              <router-outlet></router-outlet>
              </div>`,
              styles: ['.main {background: yellow}'],
    directives: [ ROUTER_DIRECTIVES, SearchComponent]
})

@Routes([
    {path: '/', component: EbayComponent},
    { path: '/amazon', component: AmazonComponent}
])
class RootComponent{
}


bootstrap(RootComponent, [ROUTER_PROVIDERS, StateService, provide(LocationStrategy, {useClass: HashLocationStrategy})]);

