import { Component, OnInit } from '@angular/core';
import {CardUnitComponent} from '../tools/card-tools/card-unit/card-unit.component';
import {ChecklistComponent} from '../tools/checklist/checklist.component';


@Component({
  moduleId: module.id,
  selector: 'landingspage',
  templateUrl: 'landingspage.component.html',
  styleUrls: ['landingspage.component.css'],
  directives: [CardUnitComponent, ChecklistComponent]
})
export class LandingspageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
