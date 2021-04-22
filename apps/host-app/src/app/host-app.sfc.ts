import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'host-app',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <h1>MicroAF</h1>

    <maps-app></maps-app>
    <tube-app></tube-app>
    <zippy-app></zippy-app>
  `,
})
export class HostAppComponent {}

@NgModule({
  declarations: [HostAppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HostAppScam {}
