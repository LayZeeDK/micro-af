import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'host-app',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `Host app`,
})
export class HostAppComponent {}

@NgModule({
  declarations: [HostAppComponent],
})
export class HostAppScam {}
