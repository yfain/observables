import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>All Products</h1>
  <ul>
    <li *ngFor="let product of products">
       {{product.title}}
    </li>
  </ul>
  `})
export class AppComponent implements OnInit {

  products: Array<string> = [];

  theDataSource: Observable<string>;

  constructor(private http: HttpClient) {

    this.theDataSource = this.http.get('/api/products');
  }

  ngOnInit() {

    // Get the data from the REST server
    this.theDataSource.subscribe(
      data => {
        if (Array.isArray(data)) {
          this.products = data;
        } else {
          this.products.push(data);
        }
      },
      err =>
        console.log('Can not get products. Error code: %s, URL: %s ',  err.status, err.url),
      () => console.log('Product(s) are retrieved')
    );
  }
}
