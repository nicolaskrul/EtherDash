import {AuthService} from '../auth.service';
import {User} from '../UserTypes.class';
import {CardUnitComponent} from '../../tools/card-tools/card-unit/card-unit.component';
import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [CardUnitComponent],
  providers: [AuthService]
})
export class LoginComponent{
    @Input('username') username : String;
    @Input('password') password : String;

    public user = new User('','username','','password');
    public errorMsg = '';

    constructor(
        private _service:AuthService) {}

    loginUser() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }



}
