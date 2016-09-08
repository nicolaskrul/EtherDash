import {provideRouter, RouterConfig } from '@angular/router';

import {LandingspageComponent} from './landingspage/landingspage.component';
import {ProfileComponent} from './profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './auth/login/login.component';
import {DemoComponent} from './demo/demo.component';

const routes: RouterConfig = [
  { path: 'profile', component: ProfileComponent },
  { path: 'landingspage', component: LandingspageComponent },
  {path: 'global', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'demo', component: DemoComponent},
  { path: '**', component: LandingspageComponent}
  ];

  export const RouterProviders = [
    provideRouter(routes)
  ];
