import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CardUnitComponent} from '../card-unit/card-unit.component';

@Component({
  moduleId: module.id,
  selector: 'card-panel',
  templateUrl: 'card-panel.component.html',
  styleUrls: ['card-panel.component.css'],
  encapsulation: ViewEncapsulation.Native,
  directives: [CardUnitComponent]
})
export class CardPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
