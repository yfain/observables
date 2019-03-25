import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader, NgModuleFactoryLoader  } from '@angular/core';

import { AppComponent } from './app.component';
import {LoadModuleDirective} from './load-module-directive';

@NgModule({
  declarations: [
    AppComponent, LoadModuleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
