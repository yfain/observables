import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LuxuryComponent} from './luxury.component';

@NgModule({
    imports:      [ CommonModule],
    declarations: [ LuxuryModule.rootComponent ],
    entryComponents: [LuxuryModule.rootComponent ]
})

export class LuxuryModule {
  static rootComponent = LuxuryComponent;
}
