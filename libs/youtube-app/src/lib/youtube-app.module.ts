import { NgModule } from '@angular/core';

import { YoutubeAppComponent, YoutubeAppScam } from './youtube-app.sfc';

@NgModule({
  bootstrap: [YoutubeAppComponent],
  imports: [YoutubeAppScam],
})
export class YoutubeAppModule {}
