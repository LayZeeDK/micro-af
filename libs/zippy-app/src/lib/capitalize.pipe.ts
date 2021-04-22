import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zippyCapitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string) {
    return value
      .split(/\s+/g)
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(' ');
  }
}

@NgModule({
  declarations: [CapitalizePipe],
  exports: [CapitalizePipe],
})
export class CapitalizeScam {}
