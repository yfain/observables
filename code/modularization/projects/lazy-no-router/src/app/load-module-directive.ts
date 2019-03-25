// Adopted from the blog by Netanel Basal https://bit.ly/2HGegeI

import {
  Directive,
  Inject,
  Injector,
  Input,
  NgModuleFactory,
  NgModuleFactoryLoader,
  NgModuleRef,
  OnDestroy,
  OnInit, Type,
  ViewContainerRef
} from '@angular/core';
import {LAZY_MODULES_MAP, LazyModules} from './lazy-map';

type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };

@Directive({
  selector: '[loadModule]'
})
export class LoadModuleDirective implements OnInit, OnDestroy {

  @Input('loadModule') moduleName: keyof LazyModules;
  private moduleRef: NgModuleRef<any>;

  constructor(
    private vcr: ViewContainerRef,
    private injector: Injector,
    private loader: NgModuleFactoryLoader,
    @Inject(LAZY_MODULES_MAP) private modulesMap
  ) {}

  ngOnInit() {
    // Load the module and get its root component
    this.loader
      .load(this.modulesMap[this.moduleName])
      .then((moduleFactory: NgModuleFactory<any>) => {
        this.moduleRef = moduleFactory.create(this.injector);

        const rootComponent = (moduleFactory.moduleType as ModuleWithRoot).rootComponent;

        // Create the component
        const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(
          rootComponent
        );

        this.vcr.createComponent(factory);

      });
  }

  ngOnDestroy() {
    this.moduleRef && this.moduleRef.destroy();
  }
}
