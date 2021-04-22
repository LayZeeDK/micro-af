import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsAppComponent } from '@micro-af/google-maps-app';
import { YoutubeAppComponent } from '@micro-af/youtube-app';
import { first } from 'rxjs/operators';

import { HostAppComponent, HostAppScam } from './host-app.sfc';

@NgModule({
  bootstrap: [HostAppComponent],
  imports: [BrowserModule, HostAppScam],
})
export class HostAppModule {
  constructor(hostApp: ApplicationRef) {
    hostApp.isStable.pipe(first((isStable) => isStable)).subscribe(() => {
      hostApp.bootstrap(GoogleMapsAppComponent);
      hostApp.bootstrap(YoutubeAppComponent);
    });
  }
}
