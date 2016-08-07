import { Component, Input, ElementRef } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'card-unit',
  templateUrl: 'card-unit.component.html',
  styleUrls: ['card-unit.component.css']
})
export class CardUnitComponent implements AfterContentInit {
    @Input('card-title') cardTitle;
    @ViewChild('card-data') ElementRef cardData;
    public title;

    ngOnInit() {
        this.title = this.cardTitle;

    };

        @override
        ngAfterContentInit() {

             print(cardData.text);
        }
}
