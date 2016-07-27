import { provideRouter, RouterConfig } from '@angular/router';

import {LandingspageComponent} from './landingspage/landingspage.component';
import {ProfileComponent} from './profile/profile.component';

const routes: RouterConfig = [
  { path: 'profile', component: ProfileComponent },
  { path: '*', component: LandingspageComponent }
  ];

  export const RouterProviders = [
    provideRouter(routes)
  ];
