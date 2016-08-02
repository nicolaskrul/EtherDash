import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'card-unit',
  templateUrl: 'card-unit.component.html',
  styleUrls: ['card-unit.component.css']
})
export class CardUnitComponent {
    @Input('card-title') cardTitle;
    public title;

    ngOnInit() {
        this.title = this.cardTitle;
    };

}
