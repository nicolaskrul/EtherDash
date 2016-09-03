import { Component, OnInit } from '@angular/core';
import {CardUnitComponent} from '../tools/card-tools/card-unit/card-unit.component';

@Component({
  moduleId: module.id,
  selector: 'app-demo',
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.css'],
  directives: [CardUnitComponent]
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
