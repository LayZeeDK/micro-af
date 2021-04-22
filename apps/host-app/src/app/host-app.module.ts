import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { first } from 'rxjs/operators';

import { HostAppComponent, HostAppScam } from './host-app.sfc';

@NgModule({
  bootstrap: [HostAppComponent],
  imports: [BrowserModule, HostAppScam],
})
export class HostAppModule {
  constructor(hostApp: ApplicationRef) {
    hostApp.isStable.pipe(first((isStable) => isStable)).subscribe(() => {
      import('@micro-af/google-maps-app').then(({ GoogleMapsAppComponent }) =>
        hostApp.bootstrap(GoogleMapsAppComponent)
      );
      import('@micro-af/youtube-app').then(({ YoutubeAppComponent }) =>
        hostApp.bootstrap(YoutubeAppComponent)
      );
    });
  }
}
