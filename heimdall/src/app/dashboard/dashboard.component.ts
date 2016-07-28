import { Component, OnInit } from '@angular/core';
import {CardUnitComponent} from '../tools/card-unit/card-unit.component';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [CardUnitComponent]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
