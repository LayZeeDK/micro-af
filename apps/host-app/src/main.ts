import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HostAppModule } from './app/host-app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(HostAppModule, {
    ngZone: 'noop',
  })
  .catch((err) => console.error(err));
