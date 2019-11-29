import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {ShippingModule} from './shipping/shipping.module';

@NgModule({
  imports: [ BrowserModule, ShippingModule,
    RouterModule.forRoot([
      {path: '',        component: HomeComponent},
      {path: 'shipping', loadChildren: () => ShippingModule},  // eager
      {path: 'luxury', loadChildren: () => import('./luxury/luxury.module').then(m => m.LuxuryModule)} ] // lazy
      )
  ],
  declarations: [ AppComponent, HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}

