import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'card-unit',
  templateUrl: 'card-unit.component.html',
  styleUrls: ['card-unit.component.css'],
  inputs:[ 'cardTitle' ]
})
export class CardUnitComponent {

    @Input('cardTitle') title: string;


}
