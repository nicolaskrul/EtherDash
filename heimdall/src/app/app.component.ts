import { AuthService} from './auth/auth.service';
import { Component } from '@angular/core';
import { LoginComponent} from './auth/login/login.component';
import { MenuComponent} from './navigation/menu/menu.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, MenuComponent],
  providers:[AuthService]
})
export class Dashboard {

    constructor(private _service:AuthService){

    }

    logout(){
        this._service.logout();
    }
}
