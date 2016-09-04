import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Dashboard, environment } from './app/';
import { RouterProviders } from './app/app.routes';
import {HTTP_PROVIDERS} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(Dashboard,[
    RouterProviders,
    HTTP_PROVIDERS
])
.catch(err => console.error(err));
