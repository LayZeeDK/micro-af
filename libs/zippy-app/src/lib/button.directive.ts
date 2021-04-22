import { Directive, EventEmitter, HostListener, NgModule, Output } from '@angular/core';

@Directive({
  exportAs: 'zippyButton',
  selector: '[zippyButton]',
})
export class ButtonDirective {
  @Output()
  appClick = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    console.log('Click');
    this.appClick.emit();
  }
}

@NgModule({
  declarations: [ButtonDirective],
  exports: [ButtonDirective],
})
export class ButtonScam {}
