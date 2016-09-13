
import { Component } from '@angular/core';
import { LoginComponent} from './auth/login/login.component';
import { MenuComponent} from './navigation/menu/menu.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {SideMenuComponent} from './navigation/side-menu/side-menu.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, MenuComponent, SideMenuComponent]

})
export class Dashboard {


}
