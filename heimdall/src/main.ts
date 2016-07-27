import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Dashboard, environment } from './app/';
import { RouterProviders } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(Dashboard,[
    RouterProviders
])
.catch(err => console.error(err));
