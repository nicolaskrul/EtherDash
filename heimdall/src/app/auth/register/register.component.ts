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

  constructor() { }

  ngOnInit() {
  }

}
