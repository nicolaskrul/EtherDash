import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {User} from '../UserTypes.class';
import {CardUnitComponent} from '../../tools/card-tools/card-unit/card-unit.component';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  directives: [CardUnitComponent],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
    // @Input('email') email : String;
    // @Input('username') username : String;
    // @Input('password') password : String;
    // @Input('passwordConfirm') passwordConfirm : String;

    email : String;
    username : String;
    password : String;
    passwordConfirm : String;

    public user = new User('','username','','password');
    public errorMsg = '';

    constructor(
        private _service:AuthService) {}

    register() {
        if (this.checkPassword()) {
            this._service.registerUser(this.user)
            .subscribe(
                data => {
                    console.log("returned data: ", data);
                },
                error => {
                    console.error('Error: ' + error);
                });
            } else {
                console.error('Error: passwords don\'t match');
            }
    }

    checkPassword() {
        if (this.password === this.passwordConfirm) return true;
        return false;
    }


  ngOnInit() {

  }

}
