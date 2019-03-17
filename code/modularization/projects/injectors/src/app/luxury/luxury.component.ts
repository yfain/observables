import {Component} from '@angular/core';
import {LuxuryService} from './luxury.service';

@Component({
    selector: 'app-luxury',
    template: `<h1 class="gold">Luxury Component</h1>
                {{luxuryItem}} `,
    styles: ['.gold {background: yellow}']
})
export class LuxuryComponent {
  luxuryItem: string;

  constructor(private luxuryService: LuxuryService) {
    this.luxuryItem = this.luxuryService.getLuxuryItem();
  }
}
