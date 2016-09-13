import {provideRouter, RouterConfig } from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {LandingspageComponent} from './landingspage/landingspage.component';
import {ProfileComponent} from './auth/profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DemoComponent} from './demo/demo.component';

const routes: RouterConfig = [
    {path: 'dashboard',
    children: [
        {path: '', component: DashboardComponent},
        {path: 'global', component: LandingspageComponent},
        {path: 'profile', component: ProfileComponent},
        {path: 'demo', component: DemoComponent}
    ]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}
  ];

  export const RouterProviders = [
    provideRouter(routes)
  ];
