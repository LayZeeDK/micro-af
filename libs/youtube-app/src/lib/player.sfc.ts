import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'tube-player',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `YouTube player`,
})
export class PlayerComponent {}

@NgModule({
  declarations: [PlayerComponent],
  exports: [PlayerComponent],
})
export class PlayerScam {}
