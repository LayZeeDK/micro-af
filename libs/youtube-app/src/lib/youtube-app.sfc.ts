import { ChangeDetectionStrategy, Component, NgModule, ViewEncapsulation } from '@angular/core';

import { PlayerScam } from './player.sfc';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'tube-app',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `<tube-player></tube-player>`,
})
export class YoutubeAppComponent {}

@NgModule({
  declarations: [YoutubeAppComponent],
  imports: [PlayerScam],
})
export class YoutubeAppScam {}
