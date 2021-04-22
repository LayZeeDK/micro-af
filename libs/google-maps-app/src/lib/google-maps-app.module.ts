import { NgModule } from '@angular/core';

import { GoogleMapsAppComponent, GoogleMapsScam } from './google-maps-app.sfc';

@NgModule({
  bootstrap: [GoogleMapsAppComponent],
  imports: [GoogleMapsScam],
})
export class GoogleMapsAppModule {}
