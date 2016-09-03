import { Component, OnInit } from '@angular/core';
import {CardUnitComponent} from '../tools/card-tools/card-unit/card-unit.component';

@Component({
  moduleId: module.id,
  selector: 'app-landingspage',
  templateUrl: 'landingspage.component.html',
  styleUrls: ['landingspage.component.css'],
  directives: [CardUnitComponent]
})
export class LandingspageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
