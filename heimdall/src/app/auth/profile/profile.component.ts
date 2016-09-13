import { Component, OnInit } from '@angular/core';
import {CardUnitComponent} from '../../tools/card-tools/card-unit/card-unit.component';
import {ChecklistComponent} from '../../tools/checklist/checklist.component';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
  directives: [CardUnitComponent, ChecklistComponent]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
