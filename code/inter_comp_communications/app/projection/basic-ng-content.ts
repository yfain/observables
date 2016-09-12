import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'child',
  styles: ['.wrapper {background: lightgreen;}'],
  template: `
    <div class="wrapper">
     <h2>Child</h2>
      <div>This div is defined in the child's template</div>
      <ng-content></ng-content>
    </div>
  `
})
class ChildComponent {}

@Component({
  selector: 'app',
  styles: ['.wrapper {background: cyan;}'],
  template: `
    <div class="wrapper">
     <h2>Parent</h2>
      <div>This div is defined in the Parent's template</div>
      <child>
        <div><h3>Parent projects this div onto the child </h3></div>
      </child>
    </div>
  `
})
class AppComponent {}

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent, ChildComponent],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
