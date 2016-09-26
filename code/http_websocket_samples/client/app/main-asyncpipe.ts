import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';
import { Observable} from "rxjs/Observable";

@Component({
  selector: 'http-client',
  template: `<h1>All Products</h1>
  <ul>
    <li *ngFor="let product of products | async">
       {{product.title}}
    </li>
  </ul>
  
  `})
class AppComponent {

  products: Observable<Array<string>>;
  errorMessage: Observable;

  constructor(private http: Http) {

   this.products = this.http.get('/products')
        .map(res => res.json())
        .catch( err => {
                console.log("Can't get product details. Error code: %s, URL: %s ",  err.status, err.url)
                let errors: Array = [];
                errors.push("Can't get product details.");
                //this.errorMessage = Observable.from(errors);
                this.errorMessage =Observable.empty();
                return this.errorMessage;
                });

  }
}

@NgModule({
  imports:      [ BrowserModule,
    HttpModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);