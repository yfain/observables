import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {productReducer} from "./store/reducer";
import {StoreModule} from "@ngrx/store";
import {FormsModule} from "@angular/forms";
import {InventoryEffects} from "./store/effects";
import {EffectsModule} from "@ngrx/effects";
import {InventoryService} from "./inventory.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.forRoot({productState: productReducer}),
        EffectsModule.forRoot([InventoryEffects]),
    ],
    providers: [InventoryService],
    bootstrap: [AppComponent]
})
export class AppModule { }
