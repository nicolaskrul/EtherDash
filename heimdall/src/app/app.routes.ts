import {provideRouter, RouterConfig } from '@angular/router';

import {LandingspageComponent} from './landingspage/landingspage.component';
import {ProfileComponent} from './profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: RouterConfig = [
  { path: 'profile', component: ProfileComponent },
  { path: 'landingspage', component: LandingspageComponent },
  {path: 'global', component: DashboardComponent},
  { path: '', component: LandingspageComponent}
  ];

  export const RouterProviders = [
    provideRouter(routes)
  ];
