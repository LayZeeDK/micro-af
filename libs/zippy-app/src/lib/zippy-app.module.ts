import { NgModule } from '@angular/core';

import { ZippyAppComponent, ZippyAppScam } from './zippy-app.sfc';

@NgModule({
  bootstrap: [ZippyAppComponent],
  imports: [ZippyAppScam],
})
export class ZippyAppModule {}
