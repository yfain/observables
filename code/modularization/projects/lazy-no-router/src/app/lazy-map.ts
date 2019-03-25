// Adopted from the blog by Netanel Basal https://bit.ly/2HGegeI

import {InjectionToken} from '@angular/core';

export interface LazyModules {
  luxuryModule: string;
}

export const lazyMap: LazyModules = {
  luxuryModule: 'projects/lazy-no-router/src/app/luxury/luxury.module#LuxuryModule'
};

export const LAZY_MODULES_MAP = new InjectionToken('LAZY_MODULES_MAP',
  {
  providedIn: 'root',
  factory: () => lazyMap
});
