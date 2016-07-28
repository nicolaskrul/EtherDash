import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[title]' })
export class cardTitle {
    private cardUnitTitle = "";
    constructor(title: string) {
       this.cardUnitTitle = title;

    }
}
