import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation } from '@angular/core';

import { MapScam } from './map.sfc';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'maps-app',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `<maps-map></maps-map>`,
})
export class GoogleMapsAppComponent {}

@NgModule({
  declarations: [GoogleMapsAppComponent],
  imports: [MapScam],
})
export class GoogleMapsScam {}
