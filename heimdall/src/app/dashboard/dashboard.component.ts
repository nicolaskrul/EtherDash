import { Component, OnInit } from '@angular/core';
import {CardUnitComponent} from '../tools/card-tools/card-unit/card-unit.component';
import {CardPanelComponent} from '../tools/card-tools/card-panel/card-panel.component';
import {SideMenuComponent} from '../navigation/side-menu/side-menu.component';


@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [CardUnitComponent, CardPanelComponent, SideMenuComponent]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
