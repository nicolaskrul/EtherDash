import { Component, OnInit, Input } from '@angular/core';
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
    @Input('username') username : String;
    @Input('password') password : String;

    public user = new User('','username','','password');
    public errorMsg = '';

  constructor() { }

  ngOnInit() {
  }

}
