import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {ProductDetailComponent} from './product.detail.component';

import {CustomPreloadingStrategy} from './custom.preloader';


@NgModule({
  imports: [ BrowserModule,
    RouterModule.forRoot([
      {path: '',        component: HomeComponent},
      {path: 'product', component: ProductDetailComponent},
      {path: 'luxury', loadChildren: () => import('./luxury.module').then(m => m.LuxuryModule) } ]
//      , data: {preloadme: true}  } ]
//            , {preloadingStrategy: CustomPreloadingStrategy}
      )
  ],
  providers:    [CustomPreloadingStrategy],
  declarations: [ AppComponent, HomeComponent, ProductDetailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
