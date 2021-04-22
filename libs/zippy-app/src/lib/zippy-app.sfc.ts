import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation } from '@angular/core';

import { CapitalizeScam } from './capitalize.pipe';
import { ZippyScam } from './zippy.sfc';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'zippy-app',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <zippy-zippy label="Zippy">
      {{ title | zippyCapitalize }}
    </zippy-zippy>
  `,
})
export class ZippyAppComponent {
  title = 'MicroAF ❤️ SCAMs';
}

@NgModule({
  declarations: [ZippyAppComponent],
  imports: [CapitalizeScam, ZippyScam],
})
export class ZippyAppScam {}
