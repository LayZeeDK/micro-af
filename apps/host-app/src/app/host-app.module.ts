import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HostAppComponent, HostAppScam } from './host-app.sfc';

@NgModule({
  bootstrap: [HostAppComponent],
  imports: [BrowserModule, HostAppScam],
})
export class HostAppModule {}
