import { Component, OnInit } from '@angular/core';
import {CardUnitComponent} from '../tools/card-unit/card-unit.component';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
directives: [CardUnitComponent]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
