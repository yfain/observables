import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
        <a [routerLink]="['/']">Home </a>
        <a [routerLink]="['/shipping']">Shipping  </a>
        <a [routerLink]="['/luxury']">Luxury </a>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {}
