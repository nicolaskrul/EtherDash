import { Component, OnInit } from '@angular/core';
import {CardUnitComponent} from '../tools/card-unit/card-unit.component'

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [CardUnitComponent]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
