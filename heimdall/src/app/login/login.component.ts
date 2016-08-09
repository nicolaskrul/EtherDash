import {AuthService} from './auth.service';
import {Anonymous} from './UserTypes.class';
import {CardUnitComponent} from '../tools/card-unit/card-unit.component';
import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [CardUnitComponent],
  providers: [AuthService]
})
export class LoginComponent{

    public user = new Anonymous('','');
    public errorMsg = '';

    constructor(
        private _service:AuthService) {}

    loginUser() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }



}
