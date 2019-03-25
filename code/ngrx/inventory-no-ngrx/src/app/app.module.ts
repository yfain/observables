import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {InventoryService} from './inventory.service';
import { ChildComponent } from './child/child.component';

@NgModule({
    declarations: [
        AppComponent,
        ChildComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [InventoryService],
    bootstrap: [AppComponent]
})
export class AppModule { }
