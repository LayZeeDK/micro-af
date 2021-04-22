import { ChangeDetectionStrategy, Component, Input, NgModule, ViewEncapsulation } from '@angular/core';

import { ButtonScam } from './button.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'zippy-zippy',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `
    <button zippyButton (zippyClick)="onToggle()">
      {{ label }}
    </button>

    <div [hidden]="!isExpanded">
      <ng-content></ng-content>
    </div>
  `,
})
export class ZippyComponent {
  @Input()
  label = 'Toggle';

  isExpanded = false;

  onToggle() {
    this.isExpanded = !this.isExpanded;
  }
}

@NgModule({
  declarations: [ZippyComponent],
  imports: [ButtonScam],
  exports: [ZippyComponent],
})
export class ZippyScam {}
