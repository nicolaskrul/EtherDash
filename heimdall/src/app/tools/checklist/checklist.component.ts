import { Component,Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-checklist',
  templateUrl: 'checklist.component.html',
  styleUrls: ['checklist.component.css']
})
export class ChecklistComponent implements OnInit {
    @Input('list-title') listTitle:string;

    public title;

    ngOnInit() {
        this.title = this.listTitle;

    };


}
