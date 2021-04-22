import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'maps-map',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `Google Maps`,
})
export class MapComponent {}

@NgModule({
  declarations: [MapComponent],
  exports: [MapComponent],
})
export class MapScam {}
